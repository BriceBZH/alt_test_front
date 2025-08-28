import { useEffect, useState } from "react";
import { format } from "date-fns";
import Modal from 'react-modal';

function Tools() {
    const [tools, setTools] = useState([]);
    const [status, setStatus] = useState("All");
    const [category, setCategory] = useState("All");
    const [department, setDepartment] = useState("All");
    const [cost, setCost] = useState("All");
    const [filteredTools, setFilteredTools] = useState([]);
    const [modal, setModal] = useState(false);

    function handleChangeStatus(event) {
        setStatus(event.target.value);
    }

    function handleChangeCategory(event) {
        setCategory(event.target.value);
    }

    function handleChangeDepartment(event) {
        setDepartment(event.target.value);
    }

    function handleChangeCost(event) {
        setCost(event.target.value);
    }

    function handleOpen() {
        setModal(true);
    }

    function handleClose() {
        setModal(false);
    }

    useEffect(() => {
        // fetch("https://tt-jsonserver-01.alt-tools.tech/tools")
        fetch("http://localhost:3001/tools")
        .then((response) => response.json())
        .then((data) => {
            setTools(data);
        })
        .catch((err) => {
            console.error("Erreur fetching tools:", err);
        });
     }, []);

    useEffect(() => {
        let filtered = tools;

        if (status && status !== "All") {
            filtered = filtered.filter(tool => tool.status === status);
        } if (category && category !== "All") {
            filtered = filtered.filter(tool => tool.category === category);
        } if (department && department !== "All") {
            filtered = filtered.filter(tool => tool.owner_department === department);
        } if (cost > 0 && cost !== "All") {
            filtered = filtered.filter(tool => tool.previous_month_cost <= cost);
        }

        setFilteredTools(filtered);
    }, [status, category, department, tools, cost]);
  return (
    <div>
      <h1>Internal Tools Dashboard</h1>
      <p>Monitor and manage your organisation's software tools and expenses</p>

        <div className="card text-white mt-4 rounded" style={{ backgroundColor: '#0A0A0A', border: "1px solid #191919" }}>
            <div className="card-body">
                <h3>List of tools</h3>
                <div className="table-responsive">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex gap-3">
                            {/* Modal */}
                            <button onClick={handleOpen}>Open modal</button>
                            <Modal isOpen={modal} onRequestClose={handleClose}>
                                <button onClick={handleClose}>Close</button>
                                <form>
                                    <label htmlFor="id" className="form-label text-white">id</label>
                                    <input tupe="text" id="id" />
                                    <label htmlFor="status" className="form-label text-white">name</label>
                                    <input tupe="text" id="id" />
                                    <label htmlFor="status" className="form-label text-white">description</label>
                                    <input tupe="text" id="id" />
                                    <label htmlFor="status" className="form-label text-white">vendor</label>
                                    <input tupe="text" id="id" />
                                    <label htmlFor="status" className="form-label text-white">category</label>
                                    <select className="form-select form-select-sm bg-dark text-light">
                                        <option value="">All Departments</option>
                                        <option value="Engineering">Engineering</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Design">Design</option>
                                    </select>
                                    <label htmlFor="status" className="form-label text-white">monthly_cost</label>
                                    <input tupe="text" id="id" />
                                    <label htmlFor="status" className="form-label text-white">previous_month_cost</label>
                                    <input tupe="text" id="id" />
                                    <label htmlFor="status" className="form-label text-white">owner_department</label>
                                    <select className="form-select form-select-sm bg-dark text-light">
                                        <option value="">All Departments</option>
                                        <option value="Engineering">Engineering</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Design">Design</option>
                                    </select>
                                    <label htmlFor="status" className="form-label text-white">status</label>
                                    <select className="form-select form-select-sm bg-dark text-light">
                                        <option value="">All Status</option>
                                        <option value="Active">Active</option>
                                        <option value="Expiring">Expiring</option>
                                        <option value="Unused">Unused</option>
                                    </select>
                                    <label htmlFor="status" className="form-label text-white">website_url</label>
                                    <input tupe="text" id="id" />
                                    <label htmlFor="status" className="form-label text-white">active_users_count</label>
                                    <input tupe="text" id="id" />
                                    <label htmlFor="status" className="form-label text-white">icon_url</label>
                                    <input tupe="text" id="id" />
                                    <label htmlFor="status" className="form-label text-white">created_at</label>
                                    <input tupe="text" id="id" />
                                    <label htmlFor="status" className="form-label text-white">updated_at</label>
                                    <input tupe="text" id="id" />
                                </form>
                            </Modal>
                            {/* Status */}
                            <label htmlFor="status" className="form-label text-white">
                                Status:
                            </label>
                            <select className="form-select form-select-sm bg-dark text-light" id="status" value={status} onChange={handleChangeStatus}>
                                <option value="">All Status</option>
                                {Array.from(new Set(Array.isArray(tools) ? tools.map(t => t.status) : []))
                                    .map((status, index) => (
                                        <option key={index} value={status}>{status}</option>
                                    ))
                                }
                            </select>
                            {/* Category */}
                            <label htmlFor="category" className="form-label text-white">
                                Category:
                            </label>
                            <select className="form-select form-select-sm bg-dark text-light" id="category" value={category} onChange={handleChangeCategory}>
                                <option value="">All Category</option>
                                {Array.from(new Set(Array.isArray(tools) ? tools.map(t => t.category) : []))
                                    .map((category, index) => (
                                        <option key={index} value={category}>{category}</option>
                                    ))
                                }
                            </select>
                            {/* Department */}
                            <label htmlFor="department" className="form-label text-white">
                                Department:
                            </label>
                            <select className="form-select form-select-sm bg-dark text-light" id="department" value={department} onChange={handleChangeDepartment}>
                                <option value="">All Department</option>
                                {Array.from(new Set(Array.isArray(tools) ? tools.map(t => t.owner_department) : []))
                                    .map((owner_department, index) => (
                                        <option key={index} value={owner_department}>{owner_department}</option>
                                    ))
                                }
                            </select>
                            {/* Cost */}
                            <label htmlFor="cost" className="form-label text-white">
                                Cost: {cost}
                            </label>
                            <input type="range" className="form-range" id="cost" min={0} max={3000} step={50} onChange={handleChangeCost} />
                        </div>
                    </div>

                    <table className="table table-dark table-hover align-middle">
                        <thead>
                            <tr className="table table-dark table-hover align-middle">
                                <th style={{ backgroundColor: '#0A0A0A' }}>Tool</th>
                                <th style={{ backgroundColor: '#0A0A0A' }}>Description</th>
                                <th style={{ backgroundColor: '#0A0A0A' }}>Category</th>
                                <th style={{ backgroundColor: '#0A0A0A' }}>Department</th>
                                <th style={{ backgroundColor: '#0A0A0A' }}>Users</th>
                                <th style={{ backgroundColor: '#0A0A0A' }}>Monthly Cost</th>
                                <th style={{ backgroundColor: '#0A0A0A' }}>Status</th>
                                <th style={{ backgroundColor: '#0A0A0A' }}>Updated At</th>
                                <th style={{ backgroundColor: '#0A0A0A' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                           {Array.isArray(filteredTools) ? filteredTools.map((tool, index) => (         
                                <tr key={index}>
                                    <td style={{ backgroundColor: '#0A0A0A' }}><img src={tool.icon_url} alt={tool.name + " icon"} style={{ width: 32, height: 32, marginRight: 8 }} /> {tool.name}</td>
                                    <td style={{ backgroundColor: '#0A0A0A' }}>{tool.description}</td>
                                    <td style={{ backgroundColor: '#0A0A0A' }}>{tool.category}</td>
                                    <td style={{ backgroundColor: '#0A0A0A' }}>{tool.owner_department}</td>
                                    <td style={{ backgroundColor: '#0A0A0A' }}>{tool.active_users_count}</td>
                                    <td style={{ backgroundColor: '#0A0A0A' }}>{tool.previous_month_cost}</td>
                                    <td style={{ backgroundColor: '#0A0A0A' }}>
                                        <span className={`badge ${tool.status === "active" ? "bg-success" : tool.status === "expiring" ? "bg-warning text-dark" : "bg-danger" }`} >
                                            {tool.status}
                                        </span>
                                    </td>
                                    <td style={{ backgroundColor: '#0A0A0A' }}>
                                        {format(new Date(tool.updated_at), "dd/MM/yyyy HH:mm")}
                                    </td>
                                    <td style={{ backgroundColor: '#0A0A0A' }}>
                                        <div className="dropdown">
                                            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                                Actions
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li><a className="dropdown-item" href="#">View</a></li>
                                                <li><a className="dropdown-item" href="#">Edit</a></li>
                                                <li><a className="dropdown-item" href="#">Delete</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            )) : null}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Tools;
