const prisma = require("../config/prisma");

const getInventory = async () => {

    const inventory = await prisma.product.findMany({
        include: {
            batches: true
        }
    });

    return inventory.map(product => {

        const availableStock = product.batches.reduce(
            (sum, batch) => sum + batch.remainingQuantity,
            0
        );

        const inventoryValue = product.batches.reduce(
            (sum, batch) => sum + (batch.remainingQuantity * batch.unitPrice),
            0
        );

        return {
            productId: product.id,
            productCode: product.productCode,
            productName: product.name,
            availableStock,
            inventoryValue
        };

    });

};

module.exports = {
    getInventory
};