const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const productRoutes = require("./routes/product.routes");
const purchaseRoutes = require("./routes/purchase.routes");
const saleRoutes = require("./routes/sale.routes");
const inventoryRoutes = require("./routes/inventory.routes");
const ledgerRoutes = require("./routes/ledger.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/purchases", purchaseRoutes);
app.use("/api/sales", saleRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/ledger", ledgerRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Inventory Management API Running",
    });
});

module.exports = app;