import {useState, useContext, useReducer} from 'react';
import {TransactionContext} from '../context/TransactionContext';
import { useNavigate } from 'react-router-dom';


export default function AddTransaction(){
    const {transaction, setTransaction} = useContext(TransactionContext);
    const navigate = useNavigate();
    
    const initialState = {
        description: "",
        amount: "",
        category: "",
        date: "",
        descriptionError: "",
        amountError: "",
        categoryError: "",
        dateError: ""
    }

    function reducer(state, action){
        switch(action.type){
            case "UPDATE_FIELD":
                return {...state, [action.payload.name]: action.payload.value};
            case "SET_ERRORS":
                return {...state, ...action.payload};
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    function handleSubmit(e){
        e.preventDefault();

        if(state.description === "" || state.category === "" || state.date === "" || state.amount === ""){
            dispatch({type: "SET_ERRORS", payload: {descriptionError: state.description === "" ? "Enter Description" : "",
                amountError: state.amount === "" ? "Enter Amount" : "",
                categoryError: state.category === "" ? "Enter Category" : "", 
                dateError: state.date === "" ? "Enter Date" : ""
            } });
            return;
        }


        const nextID = Math.max(...transaction.map(item => item.id), 0) + 1;

        setTransaction([...transaction, {id: nextID, description: state.description, amount:state.amount, category: state.category, date: state.date}]);
        alert("New Transaction Added Successfully")
        navigate('/transactions');
    }
    return <>
    <div className='form-container'>
        <form onSubmit={handleSubmit} className='form-group'>
            <div >
                <h2>Please fill the form below to add your new transaction</h2>
                <div className=''>
                    <input type="text"
                    name="description"
                    className='form-input'
                    value={state.description}
                    placeholder="Enter Description"
                    onChange={(e)=> dispatch({type: "UPDATE_FIELD", payload: {name: "description", value:e.target.value}})}
                    />
                    <p className='form-error'>{state.descriptionError}</p>

                    <input type="number"
                    name="amount"
                    className='form-input'
                    value={state.amount}
                    placeholder="Enter Amount"
                    onChange={(e)=> dispatch({type: "UPDATE_FIELD", payload: {name: "amount", value:e.target.value}})}
                    />
                    <p className='form-error'>{state.amountError}</p>

                    <select type="text"
                    name="category"
                    className='form-input'                    
                    value={state.category}
                    placeholder="Enter Category"
                    onChange={(e)=> dispatch({type: "UPDATE_FIELD", payload: {name: "category", value:e.target.value}})}
                    >
                        <option value="">Select Category</option>
                        <option value="Income">Income</option>
                        <option value="Expenses">Expenses</option>
                    </select>
                    <p className='form-error'>{state.categoryError}</p>

                    <input type="text"
                    name="date"
                    className='form-input'
                    value={state.date}
                    placeholder="Enter Date"
                    onChange={(e)=> dispatch({type: "UPDATE_FIELD", payload: {name: "date", value:e.target.value}})}
                    />
                    <p className='form-error'>{state.dateError}</p>

                    <input type="submit" />
                </div>
            </div>
        </form>
    </div>
    </>
}