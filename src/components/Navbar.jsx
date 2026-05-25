import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <nav className="nav-container">
            <span className="nav-logo">₦ Finance Tracker</span>
            <div className="nav-links">
                <Link className="nav-link" to="/">Dashboard</Link>
                <Link className="nav-link" to="/transactions">All Transactions</Link>
                <Link className="nav-link" to="/add">Add New Transaction</Link>
            </div>
        </nav>
    )
}