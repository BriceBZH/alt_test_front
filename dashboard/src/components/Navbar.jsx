
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active text-white" to="/">Dashboard</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="/Tools">Tools</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="/Analytics">Analytics</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="/Settings">Settings</Link>
            </li>
        </ul>
        </div>   
    )
}

export default Navbar