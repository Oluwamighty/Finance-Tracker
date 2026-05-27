import { useContext } from "react";
import TransactionContext from "../context/TransactionContext";

export default function Dashboard(){
    const context = useContext(TransactionContext);

    if(!context) return <div>Loading...</div>
    const {transaction, setTransaction} = context;

    const income = transaction.filter(amount=>amount.category === "Income");
    const expenses = transaction.filter(amount=>amount.category === "Expenses");

    const incomeTotal = income.reduce((total, amount)=>total + (amount.amount), 0);
    const expensesTotal = expenses.reduce((total, amount)=>total + (amount.amount), 0);

    const totalBalance = (incomeTotal - expensesTotal);
    return (
        
        <div className="page">
            <div className="page-header">
                <h1 className="page-title">Dashboard</h1>
            </div>
            <div className="dashboard-stats">
                <div className="stat-card balance">
                    <p className="stat-label">Total Balance</p>
                    <p className="stat-amount">₦{totalBalance.toLocaleString()}</p>
                </div>
                <div className="stat-card income">
                    <p className="stat-label">Total Income</p>
                    <p className="stat-amount">₦{incomeTotal.toLocaleString()}</p>
                </div>
                <div className="stat-card expenses">
                    <p className="stat-label">Total Expenses</p>
                    <p className="stat-amount">₦{expensesTotal.toLocaleString()}</p>
                </div>

            </div>
        </div>
    )
}