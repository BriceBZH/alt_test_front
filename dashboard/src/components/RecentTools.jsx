import { MessageCircle, Palette, Zap, Edit, Search, Wrench, Briefcase } from "lucide-react";

function RecentTools() {
    const toolsData = [
        { picto: <MessageCircle size={24} className="text-white" />, name: "Slack", department: "Communication", users: 245, monthlyCost: "€2.450", status: "active" },
        { picto: <Palette size={24} className="text-white" />, name: "Figma", department: "Design", users: 32, monthlyCost: "€480", status: "active" },
        { picto: <Zap size={24} className="text-white" />, name: "GitHub", department: "Engineering", users: 89, monthlyCost: "€890", status: "active" },
        { picto: <Edit size={24} className="text-white" />, name: "Notion", department: "Operations", users: 156, monthlyCost: "€780", status: "Expiring" },
        { picto: <Search size={24} className="text-white" />, name: "Adobe CC", department: "Marketing", users: 12, monthlyCost: "€720", status: "Unused" },
        { picto: <Search size={24} className="text-white" />, name: "Zoom", department: "Communication", users: 198, monthlyCost: "€1.980", status: "active" },
        { picto: <Wrench size={24} className="text-white" />, name: "Jira", department: "Engineering", users: 67, monthlyCost: "€670", status: "Expiring" },
        { picto: <Briefcase size={24} className="text-white" />, name: "SalesForce", department: "sales", users: 45, monthlyCost: "€4.500", status: "active" },
    ];
    return (
        <div className="card text-white mt-4 rounded" style={{ backgroundColor: '#0A0A0A', border: "1px solid #191919" }}>
            <div className="card-body">
                <h3>Recent tools</h3>
                <div className="table-responsive">
                    <table className="table table-dark table-hover align-middle">
                        <thead>
                            <tr className="table table-dark table-hover align-middle">
                                <th style={{ backgroundColor: '#0A0A0A' }}>Tool</th>
                                <th style={{ backgroundColor: '#0A0A0A' }}>Department</th>
                                <th style={{ backgroundColor: '#0A0A0A' }}>Users</th>
                                <th style={{ backgroundColor: '#0A0A0A' }}>Monthly Cost</th>
                                <th style={{ backgroundColor: '#0A0A0A' }}>Status</th>
                                <th style={{ backgroundColor: '#0A0A0A' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {toolsData.map((tool, index) => (
                                <tr key={index}>
                                    <td style={{ backgroundColor: '#0A0A0A' }}>{tool.picto} {tool.name}</td>
                                    <td style={{ backgroundColor: '#0A0A0A' }}>{tool.department}</td>
                                    <td style={{ backgroundColor: '#0A0A0A' }}>{tool.users}</td>
                                    <td style={{ backgroundColor: '#0A0A0A' }}>{tool.monthlyCost}</td>
                                    <td style={{ backgroundColor: '#0A0A0A' }}>
                                        <span className={`badge ${tool.status === "active" ? "bg-success" : tool.status === "Expiring" ? "bg-warning text-dark" : "bg-danger" }`} >
                                            {tool.status}
                                        </span>
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
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default RecentTools