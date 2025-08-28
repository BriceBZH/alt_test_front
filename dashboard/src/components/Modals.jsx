import Modal from 'react-modal';

function Modals({ onModalChange, modal, handleSubmit }) {
    return (
        <>
        {/* Modal */}
        <button onClick={() => onModalChange(true)}>Open modal</button>
        <Modal isOpen={modal} onRequestClose={() => onModalChange(false)} style={{
        content: { background: "#0A0A0A", color: "#fff", maxWidth: "600px", margin: "auto", padding: "20px" },
        overlay: { backgroundColor: "rgba(0,0,0,0.5)" }
        }}>
            <button onClick={() => onModalChange(false)}>Close</button>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label text-white">ID</label>
                    <input type="text" className="form-control" id="id" />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label text-white">Name</label>
                    <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label text-white">Description</label>
                    <input type="text" className="form-control" id="description" />
                </div>
                <div className="mb-3">
                    <label htmlFor="vendor" className="form-label text-white">Vendor</label>
                    <input type="text" className="form-control" id="vendor" />
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label text-white">Category</label>
                    <select className="form-select form-select-sm bg-dark text-light" id="category">
                    <option value="">Select Category</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Design">Design</option>
                    </select>
                </div>
                <div className="row">
                    <div className="col mb-3">
                    <label htmlFor="monthly_cost" className="form-label text-white">Monthly Cost</label>
                    <input type="number" className="form-control" id="monthly_cost" />
                    </div>
                    <div className="col mb-3">
                    <label htmlFor="previous_month_cost" className="form-label text-white">Previous Month Cost</label>
                    <input type="number" className="form-control" id="previous_month_cost" />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="owner_department" className="form-label text-white">Owner Department</label>
                    <select className="form-select form-select-sm bg-dark text-light" id="owner_department">
                    <option value="">Select Department</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Design">Design</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label text-white">Status</label>
                    <select className="form-select form-select-sm bg-dark text-light" id="status">
                    <option value="">Select Status</option>
                    <option value="active">Active</option>
                    <option value="Expiring">Expiring</option>
                    <option value="Unused">Unused</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="website_url" className="form-label text-white">Website URL</label>
                    <input type="text" className="form-control" id="website_url" />
                </div>
                <div className="row">
                    <div className="col mb-3">
                    <label htmlFor="active_users_count" className="form-label text-white">Active Users Count</label>
                    <input type="number" className="form-control" id="active_users_count" />
                    </div>
                    <div className="col mb-3">
                    <label htmlFor="icon_url" className="form-label text-white">Icon URL</label>
                    <input type="text" className="form-control" id="icon_url" />
                    </div>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button type="submit" className="btn btn-primary">Add Tool</button>
                </div>
            </form>
        </Modal>
        </>
    )
}

export default Modals