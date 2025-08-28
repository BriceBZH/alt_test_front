import Navbar from './Navbar'
import Notifications from './Notifications'
import SearchBar from './SearchBar'
import Logo from '../assets/images/logo.png';
import Avatar from '../assets/images/avatar.png';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg text-white p-3 d-flex align-items-center justify-content-between" style={{ backgroundColor: '#0A0A0A', borderBottom: "1px solid #191919"  }}>
            <a className="navbar-brand" href="#">
                <img src={Logo} alt="Logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                <span className="navbar-toggler-icon"></span>
            </button>
            
                <Navbar />
                <div className="text-white p-3 d-flex align-items-center justify-content-between">
                    <SearchBar />
                    <Notifications />
                    <div className="dropdown">
                        <img src={Avatar} className="rounded-circle dropdown-toggle" data-bs-toggle="dropdown" alt="User" />
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Logout</a></li>
                        </ul>
                    </div>
                </div> 
        </nav>
    )
}

export default Header