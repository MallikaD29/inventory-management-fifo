import {
    FaHome,
    FaBoxes,
    FaBook,
    FaRandom
} from "react-icons/fa";

function Sidebar() {

    return (

        <div className="sidebar">

            <h4 className="mb-4">
                Menu
            </h4>

            <ul>

                <li className="active">
                    <FaHome />
                    Dashboard
                </li>

                <li>
                    <FaBoxes /> Inventory
                </li>

                <li>
                    <FaBook /> Ledger
                </li>

                <li>
                    <FaRandom /> Simulator
                </li>

            </ul>
            <button
                className="btn btn-light btn-sm"
                onClick={() => {
                    localStorage.removeItem("loggedIn");
                    window.location.reload();
                }}
            >
                Logout
            </button>
        </div>

    );

}

export default Sidebar;