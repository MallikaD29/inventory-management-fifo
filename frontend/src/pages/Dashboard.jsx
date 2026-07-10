import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SummaryCards from "../components/SummaryCards";
import Charts from "../components/Charts";
import InventoryTable from "../components/InventoryTable";
import LedgerTable from "../components/LedgerTable";
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard-container">

        <Sidebar />

        <main className="dashboard-content">
<h2 className="fw-bold mb-4">
    Dashboard Overview
</h2>
          <SummaryCards />

          <Charts />

          <InventoryTable />

          <LedgerTable />

        </main>

      </div>
    </>
  );
}

export default Dashboard;