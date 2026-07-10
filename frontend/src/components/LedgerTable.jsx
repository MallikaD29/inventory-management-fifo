import { useEffect, useState } from "react";
import api from "../services/api";

function LedgerTable() {

    const [ledger, setLedger] = useState([]);

    useEffect(() => {
        loadLedger();
    }, []);

    const loadLedger = async () => {
        try {

            const res = await api.get("/ledger");

            setLedger(res.data.data);

        } catch (err) {
            console.error(err);
        }
    };

    return (

        <div className="card shadow mt-4">

            <div className="card-header bg-success text-white fw-bold">
                FIFO Transaction Ledger
            </div>

            <div className="card-body">

                <table className="table table-hover table-bordered">

                    <thead>

                        <tr>

                            <th>Date</th>
                            <th>Type</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Total</th>

                        </tr>

                    </thead>

                    <tbody>

                        {ledger.map((row, index) => (

                            <tr key={index}>

                                <td>
                                    {new Date(row.date).toLocaleString()}
                                </td>

                                <td>

                                    <span className={`badge ${
                                        row.type === "PURCHASE"
                                            ? "bg-success"
                                            : "bg-danger"
                                    }`}>

                                        {row.type}

                                    </span>

                                </td>

                                <td>{row.product}</td>

                                <td>{row.quantity}</td>

                                <td>₹ {row.unitPrice}</td>

                                <td>₹ {row.total}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default LedgerTable;