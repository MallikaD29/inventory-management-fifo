import { useEffect, useState } from "react";
import api from "../services/api";
import {
  FaBoxOpen,
  FaWarehouse,
  FaRupeeSign,
  FaChartLine
} from "react-icons/fa";

function SummaryCards() {
  const [summary, setSummary] = useState({
    totalProducts: 0,
    totalStock: 0,
    inventoryValue: 0,
  });

  useEffect(() => {
    loadSummary();
  }, []);

  const loadSummary = async () => {
    try {
      const res = await api.get("/dashboard");
      setSummary(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const cards = [
    {
      title: "Products",
      value: summary.totalProducts,
      icon: <FaBoxOpen size={28} />,
      color: "primary",
    },
    {
      title: "Stock",
      value: summary.totalStock,
      icon: <FaWarehouse size={28} />,
      color: "success",
    },
    {
      title: "Inventory Value",
      value: `₹ ${summary.inventoryValue}`,
      icon: <FaRupeeSign size={28} />,
      color: "warning",
    },
    {
    title:"Total Sales",
    value:`₹ ${summary.totalSales}`,
    icon:<FaChartLine size={28}/>,
    color:"secondary"
}
  ];

  return (
    <div className="row mb-4">
      {cards.map((card, index) => (
        <div className="col-md-4 mb-3" key={index}>
          <div  className={`card border-0 shadow bg-${card.color} text-white h-100 dashboard-card`}>
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h6>{card.title}</h6>
                <h3>{card.value}</h3>
              </div>
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;