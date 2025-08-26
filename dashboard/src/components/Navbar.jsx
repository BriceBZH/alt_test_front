import Logo from '../assets/logo.png';

function Navbar() {
    return (
        <div className='d-flex align-items-center justify-content-between'>
            <img src={Logo} alt="Logo" />
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active text-white" href="#">Dashboard</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Tools</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Analytics</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Settings</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar