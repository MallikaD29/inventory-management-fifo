import { useEffect, useState } from "react";
import api from "../services/api";

function InventoryTable() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    loadInventory();
  }, []);

  const loadInventory = async () => {
    try {
      const res = await api.get("/inventory");
      setInventory(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card shadow mt-4">
      <div className="card-header bg-primary text-white fw-bold">
        Product Stock Overview
      </div>

      <div className="card-body">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Product Code</th>
              <th>Product Name</th>
              <th>Available Stock</th>
              <th>Inventory Value</th>
            </tr>
          </thead>

          <tbody>
            {inventory.map((item) => (
              <tr key={item.productId}>
                <td>{item.productCode}</td>
                <td>{item.productName}</td>
                <td>{item.availableStock}</td>
                <td>₹ {item.inventoryValue}</td>
              </tr>
            ))}

            {inventory.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center">
                  No Inventory Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InventoryTable;