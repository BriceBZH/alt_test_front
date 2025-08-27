import { useEffect, useState } from "react";

function Tools() {
    const [tools, setTools] = useState([]);

    useEffect(() => {
    fetch("https://tt-jsonserver-01.alt-tools.tech/tools")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setTools(data);
        })
    }, []);
  return (
    <div>
      <h1>Internal Tools Dashboard</h1>
      <p>Monitor and manage your organisation's software tools and expenses</p>

        <div className="card text-white mt-4 rounded" style={{ backgroundColor: '#0A0A0A', border: "1px solid #191919" }}>
            <div className="card-body">
                <h3>Recent tools</h3>
                <div className="table-responsive">
                    <table className="table table-dark table-hover align-middle">
                        <thead>
                            <tr className="table table-dark table-hover align-middle">
                                <td style={{ backgroundColor: '#0A0A0A' }}>Tool</td>
                                <td style={{ backgroundColor: '#0A0A0A' }}>Department</td>
                                <td style={{ backgroundColor: '#0A0A0A' }}>Users</td>
                                <td style={{ backgroundColor: '#0A0A0A' }}>Monthly Cost</td>
                                <td style={{ backgroundColor: '#0A0A0A' }}>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            {tools.map((tool, index) => (
                                <tr key={index}>
                                    <td style={{ backgroundColor: '#0A0A0A' }}><img src={tool.icon_url} alt={tool.name + " icon"} style={{ width: 32, height: 32, marginRight: 8 }} /> {tool.name}</td>
                                    <td style={{ backgroundColor: '#0A0A0A' }}>{tool.owner_department}</td>
                                    <td style={{ backgroundColor: '#0A0A0A' }}>{tool.active_users_count}</td>
                                    <td style={{ backgroundColor: '#0A0A0A' }}>{tool.previous_month_cost}</td>
                                    <td style={{ backgroundColor: '#0A0A0A' }}>{tool.status}</td>
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
