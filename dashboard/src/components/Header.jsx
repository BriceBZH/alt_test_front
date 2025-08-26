import Navbar from './Navbar'
import Notifications from './Notifications'
import SearchBar from './SearchBar'

function Header() {
    return (
        <div className="text-white p-3 d-flex align-items-center justify-content-between" style={{ backgroundColor: '#0A0A0A', borderBottom: "1px solid #191919"  }}>
            <Navbar />
            <SearchBar />
            <Notifications />
        </div>
    )
}

export default Header