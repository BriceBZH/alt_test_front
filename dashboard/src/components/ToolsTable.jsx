import { Link } from "react-router-dom";
import { format } from "date-fns";


function ToolsTable({tools}) {
    return (
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
                {Array.isArray(tools) ? tools.map((tool, index) => (         
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
    )
}

export default ToolsTable