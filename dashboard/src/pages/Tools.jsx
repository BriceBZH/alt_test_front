import { useEffect, useState } from "react";

function Tools() {
    const [tools, setTools] = useState([]);
    const [status, setStatus] = useState("All");
    const [category, setCategory] = useState("All");
    const [department, setDepartment] = useState("All");
    const [cost, setCost] = useState("All");
    const [filteredTools, setFilteredTools] = useState([]);

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

    useEffect(() => {
        fetch("https://tt-jsonserver-01.alt-tools.tech/tools")
        .then((response) => response.json())
        .then((data) => {
            setTools(data);
        });
     }, []);

    useEffect(() => {
        let filtered = tools;

        if (status !== "All") {
            filtered = filtered.filter(tool => tool.status === status);
        } if (category !== "All") {
            filtered = filtered.filter(tool => tool.category === category);
            console.log(filtered);
        } if (department !== "All") {
            filtered = filtered.filter(tool => tool.owner_department === department);
        } if (cost !== "All") {
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
                            {/* Status */}
                            <label htmlFor="status" className="form-label text-white">
                                Status:
                            </label>
                            <select className="form-select form-select-sm bg-dark text-light" id="status" value={status} onChange={handleChangeStatus}>
                                <option value="">All Status</option>
                                <option value="active">Active</option>
                                <option value="expiring">Expiring</option>
                                <option value="unused">Unused</option>
                            </select>
                            {/* Category */}
                            <label htmlFor="category" className="form-label text-white">
                                Category:
                            </label>
                            <select className="form-select form-select-sm bg-dark text-light" id="category" value={category} onChange={handleChangeCategory}>
                                <option value="">All Category</option>
                                <option value="Communication">Communication</option>
                                <option value="Design">Design</option>
                                <option value="Development">Development</option>
                                <option value="Productivity">Productivity</option>
                                <option value="Project Management">Project Management</option>
                                <option value="Sales & Marketing">Sales & Marketing</option>
                                <option value="Security">Security</option>
                                <option value="Analytics">Analytics</option>
                                <option value="HR">HR</option>
                                <option value="Finance">Finance</option>
                            </select>
                            {/* Department */}
                            <label htmlFor="department" className="form-label text-white">
                                Department:
                            </label>
                            <select className="form-select form-select-sm bg-dark text-light" id="department" value={department} onChange={handleChangeDepartment}>
                                <option value="">All Department</option>
                                <option value="Communication">Communication</option>
                                <option value="Design">Design</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Operations">Operations</option>
                                <option value="Marketing">Marketing</option>
                            </select>
                            {/* Cost */}
                            <label htmlFor="cost" className="form-label text-white">
                                Cost:
                            </label>
                            <input type="range" className="form-range" id="cost" min={0} max={3000} step={50} onChange={handleChangeCost} />
                        </div>
                    </div>

                    <table className="table table-dark table-hover align-middle">
                        <thead>
                            <tr className="table table-dark table-hover align-middle">
                                <th style={{ backgroundColor: '#0A0A0A' }}>Tool</th>
                                <th style={{ backgroundColor: '#0A0A0A' }}>Category</th>
                                <th style={{ backgroundColor: '#0A0A0A' }}>Department</th>
                                <th style={{ backgroundColor: '#0A0A0A' }}>Users</th>
                                <th style={{ backgroundColor: '#0A0A0A' }}>Monthly Cost</th>
                                <th style={{ backgroundColor: '#0A0A0A' }}>Status</th>
                                <th style={{ backgroundColor: '#0A0A0A' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTools.map((tool, index) => (
                                <tr key={index}>
                                    <td style={{ backgroundColor: '#0A0A0A' }}><img src={tool.icon_url} alt={tool.name + " icon"} style={{ width: 32, height: 32, marginRight: 8 }} /> {tool.name}</td>
                                    <td style={{ backgroundColor: '#0A0A0A' }}>{tool.category}</td>
                                    <td style={{ backgroundColor: '#0A0A0A' }}>{tool.owner_department}</td>
                                    <td style={{ backgroundColor: '#0A0A0A' }}>{tool.active_users_count}</td>
                                    <td style={{ backgroundColor: '#0A0A0A' }}>{tool.previous_month_cost}</td>
                                    <td style={{ backgroundColor: '#0A0A0A' }}>{tool.status}</td>
                                    <td style={{ backgroundColor: '#0A0A0A' }}>
                                        <button className="btn btn-sm btn-outline-light me-2">Edit</button>
                                        <button className="btn btn-sm btn-outline-light me-2">View</button>
                                        <button className="btn btn-sm btn-outline-danger">Disable</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Tools;
