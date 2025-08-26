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
            <h3>Recent tools</h3>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-dark table-hover align-middle" style={{ backgroundColor: '#0A0A0A' }}>
                        <thead>
                            <tr>
                                <td>Tool</td>
                                <td>Department</td>
                                <td>Users</td>
                                <td>Monthly Cost</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            {toolsData.map((tool, index) => (
                                <tr key={index}>
                                    <td>{tool.picto} {tool.name}</td>
                                    <td>{tool.department}</td>
                                    <td>{tool.users}</td>
                                    <td>{tool.monthlyCost}</td>
                                    <td>{tool.status}</td>
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