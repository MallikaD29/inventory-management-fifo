import { FaBoxes } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-primary shadow-sm">
            <div className="container-fluid">
                <span className="navbar-brand fw-bold">
                    <FaBoxes className="me-2" />
                    Inventory Management System
                </span>
            </div>
        </nav>
    );
}

export default Navbar;