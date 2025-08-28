import { useEffect, useState } from "react";
import ToolsTable from '../components/ToolsTable'
import Filters from '../components/Filters'
import Modals from '../components/Modals'
import Modal from 'react-modal';

function Tools() {
    const [tools, setTools] = useState([]);
    const [filters, setFilters] = useState({
        status: "All",
        category: "All",
        department: "All",
        cost: "All"
    });
    const [filteredTools, setFilteredTools] = useState([]);
    const [modal, setModal] = useState(false);

    function handleFilterChange(field, value) {
        setFilters(prev => ({
            ...prev,
            [field]: value
        }));
    }

    function handleModal(etat) {
        setModal(etat);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newTool = {
            id: Date.now(),
            name: e.target.name.value,
            description: e.target.description.value,
            category: e.target.category.value,
            status: e.target.status.value,
            owner_department: e.target.owner_department.value,
            previous_month_cost: e.target.previous_month_cost.value,
            active_users_count: e.target.active_users_count.value,
            icon_url: e.target.icon_url.value,
            website_url: e.target.website_url.value,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };
        fetch("http://localhost:3001/tools", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTool)
        })
        .then(response => {
            if (!response.ok) throw new Error("Erreur lors de l'ajout");
            return response.json();
        })
        .then(data => {
            setTools(prev => [...prev, data]);
            setModal(false);
        })
        .catch(err => console.error(err));
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
        if (filters.status && filters.status !== "All") {
            filtered = filtered.filter(tool => tool.status === filters.status);
        } if (filters.category && filters.category !== "All") {
            filtered = filtered.filter(tool => tool.category === filters.category);
        } if (filters.department && filters.department !== "All") {
            filtered = filtered.filter(tool => tool.owner_department === filters.department);
        } if (filters.cost && filters.cost !== "All" && filters.cost > 0) {
            filtered = filtered.filter(tool => tool.previous_month_cost <= filters.cost);
        }
        setFilteredTools(filtered);
    }, [tools, filters]);

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
                            <Modals onModalChange={handleModal} modal={modal} handleSubmit={handleSubmit} />  
                            <Filters tools={tools} filters={filters} onFilterChange={handleFilterChange} />  
                        </div>
                    </div>
                    <ToolsTable tools={filteredTools} />                  
                </div>
            </div>
        </div>
    </div>
  );
}

export default Tools;