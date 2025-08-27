import Logo from '../assets/logo.png';
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div className='d-flex align-items-center justify-content-between'>
            <img src={Logo} alt="Logo" />
            <ul className="nav">
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