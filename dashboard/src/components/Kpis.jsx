import { Palette } from "lucide-react";

function Kpis() {
    return (
        <ul className="row list-unstyled g-3">
            <li className="col-md-3">
                <div className="card bg-dark text-white p-3 h-100">
                    <div className="d-flex justify-content-between align-items-start">
                        <h4 className="h6 text-secondary mb-0">Monthly Budget</h4>
                        <i className="bi bi-graph-up text-success"></i>
                    </div>
                    <p className="fs-4 fw-bold mt-2">€28.750/€30k</p>
                    <p className="text-success mb-0">+12%</p>
                </div>
            </li>

            <li className="col-md-3">
                <div className="card bg-dark text-white p-3 h-100">
                    <div className="d-flex justify-content-between align-items-start">
                        <h4 className="h6 text-secondary mb-0">Active Tools</h4>
                        <i className="bi bi-tools text-primary"></i>
                    </div>
                    <p className="fs-4 fw-bold mt-2">147</p>
                    <p className="text-success mb-0">+8</p>
                </div>
            </li>
            <li className="col-md-3">
                <div className="card bg-dark text-white p-3 h-100">
                    <div className="d-flex justify-content-between align-items-start">
                        <h4 className="h6 text-secondary mb-0">Departments</h4>
                        <i className="bi bi-graph-up text-success"></i>
                    </div>
                    <p className="fs-4 fw-bold mt-2">8</p>
                    <p className="text-success mb-0">+2</p>
                </div>
            </li>
            <li className="col-md-3">
                <div className="card bg-dark text-white p-3 h-100">
                    <div className="d-flex justify-content-between align-items-start">
                        <h4 className="h6 text-secondary mb-0">Cost/User</h4>
                        <i className="bi bi-graph-up text-success"></i>
                    </div>
                    <p className="fs-4 fw-bold mt-2">€156</p>
                    <p className="text-success mb-0">-12€</p>
                </div>
            </li>
        </ul>
    )
}

export default Kpis