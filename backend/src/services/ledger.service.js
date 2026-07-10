const prisma = require("../config/prisma");

const getLedger = async () => {

    const purchases = await prisma.inventoryBatch.findMany({
        include: {
            product: true
        }
    });

    const sales = await prisma.sale.findMany({
        include: {
            product: true
        }
    });

    const ledger = [];

    purchases.forEach(item => {
        ledger.push({
            date: item.createdAt,
            type: "PURCHASE",
            product: item.product.name,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            total: item.quantity * item.unitPrice
        });
    });

    sales.forEach(item => {
        ledger.push({
            date: item.createdAt,
            type: "SALE",
            product: item.product.name,
            quantity: item.quantity,
            unitPrice: item.totalCost / item.quantity,
            total: item.totalCost
        });
    });

    ledger.sort((a, b) => new Date(a.date) - new Date(b.date));

    return ledger;
};

module.exports = {
    getLedger
};