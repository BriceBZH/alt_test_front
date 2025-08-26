function SearchBar() {
    return (
        <form className="d-flex">{/*onSubmit="" */}
            <input type="text" className="form-control me-2 bg-dark text-white" placeholder="Search tools ..." />
            {/* <button type="submit" className="btn btn-primary">
                Go
            </button> */}
        </form>
    )
}

export default SearchBar