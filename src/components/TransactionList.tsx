import { useContext } from 'react';
import { Link } from 'react-router-dom';
import  TransactionContext  from '../context/TransactionContext';

export default function TransactionList() {
    const context = useContext(TransactionContext)
    if(!context) return <div>Loading</div>
    const { transaction } = context;

    if (!transaction.length) return (
        <div className="page">
            <p className="empty-state">No transactions yet. Add one!</p>
        </div>
    );


    return (
        <div className="page">
            <div className="page-header">
                <h1 className="page-title">All Transactions</h1>
                <p className="page-subtitle">{transaction.length} transactions found</p>
            </div>

            <div className="transaction-list">
                {transaction.map(item => (
                    <Link to={`/transaction/${item.id}`} key={item.id} className="transaction-item">
                        <div className="transaction-info">
                            <span className="transaction-description">{item.description}</span>
                            <span className="transaction-date">{item.date}</span>
                        </div>
                        <div className="transaction-right">
                            <span className={`transaction-amount ${item.category === "Income" ? "income" : "expense"}`}>
                                {item.category === "Income" ? "+" : "-"}₦{Number(item.amount).toLocaleString()}
                            </span>
                            <span className={`transaction-category ${item.category === "Income" ? "income" : "expense"}`}>
                                {item.category}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}