
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import TransactionContext from "../context/TransactionContext";

export default function TransactionDetail(){
    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate();

    const context = useContext(TransactionContext)
    if(!context) return <div>Loading...</div>
    const {transaction, setTransaction} = context;

    const item = transaction.find(t => t.id === Number (id));

    if(!item) return <div>Item not found...</div>

    return <>
        <div className="page">
            <h1>Transaction Detail</h1>
            <div>
                <p>Description: {item.description}</p>
                <p>Amount: {item.amount}</p>
                <p>Category: {item.category}</p>
                <p>Date: {item.date}</p>
            </div>
            <button className="btn btn-primary btn-ghost" onClick={()=>navigate('/transactions')}>Return to Dashboard</button>
        </div> 
    </>
}