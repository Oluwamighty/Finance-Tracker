import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react'
import TransactionContext  from './context/TransactionContext';
import TransactionDetail from './components/TransactionDetail';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import './App.css'


function App() {
  const [transaction, setTransaction] = useState([
    {id: 1, description: "Laptop Purchase", amount: 10000, category: "Expenses", date: "2026-05-12"},
    {id: 2, description: "Salary for the month of May", amount: 300000, category: "Income", date: "2026-05-25"}
  ]);

 return (
  <TransactionContext.Provider value={{transaction, setTransaction}}>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/transactions' element={<TransactionList />} />
          <Route path='/transaction/:id' element={<TransactionDetail />} />
          <Route path='/add' element={<AddTransaction />} />
        </Routes>
    </BrowserRouter>
  </TransactionContext.Provider>
 )
}

export default App
