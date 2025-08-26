import Navbar from './Navbar'
import Notifications from './Notifications'
import SearchBar from './SearchBar'

function Header() {
    return (
        <div className="bg-dark text-white p-3 d-flex align-items-center justify-content-between">
            <Navbar />
            <SearchBar />
            <Notifications />
        </div>
    )
}

export default Header