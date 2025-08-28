import { useEffect, useState } from "react";

function Filters({tools, filters, onFilterChange}) {
    return (
        <div  className="text-white p-3 d-flex align-items-center justify-content-between gap-3">
            {/* Status */}
            <label htmlFor="status" className="form-label text-white">
                Status:
            </label>
            <select className="form-select form-select-sm bg-dark text-light" id="status" value={filters.status} onChange={(e) => onFilterChange("status", e.target.value)}>
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
            <select className="form-select form-select-sm bg-dark text-light" id="category" value={filters.category} onChange={(e) => onFilterChange("category", e.target.value)}>
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
            <select className="form-select form-select-sm bg-dark text-light" id="department" value={filters.department} onChange={(e) => onFilterChange("department", e.target.value)}>
                <option value="">All Department</option>
                {Array.from(new Set(Array.isArray(tools) ? tools.map(t => t.owner_department) : []))
                    .map((owner_department, index) => (
                        <option key={index} value={owner_department}>{owner_department}</option>
                    ))
                }
            </select>
            {/* Cost */}
            <label htmlFor="cost" className="form-label text-white">
                Cost: {filters.cost}
            </label>
            <input type="range" className="form-range" id="cost" min={0} max={3000} step={50} onChange={(e) => onFilterChange("cost", e.target.value)} />

        </div>
    )
}

export default Filters