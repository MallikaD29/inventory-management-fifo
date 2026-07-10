const prisma = require("../config/prisma");

const consumeInventory = async (productId, saleQuantity) => {
    // Find available inventory batches in FIFO order
    console.log("FIFO Product:", productId);
console.log("FIFO Qty:", saleQuantity);
    const batches = await prisma.inventoryBatch.findMany({
        where: {
            productId,
            remainingQuantity: {
                gt: 0,
            },
        },
        orderBy: {
            createdAt: "asc",
        },
    });

    if (batches.length === 0) {
        throw new Error("No inventory available.");
    }

    let remainingToSell = saleQuantity;
    let totalCost = 0;
    const consumedBatches = [];

    for (const batch of batches) {
        if (remainingToSell <= 0) break;

        const consumedQty = Math.min(
            batch.remainingQuantity,
            remainingToSell
        );

        const cost = consumedQty * batch.unitPrice;

        consumedBatches.push({
            batchId: batch.id,
            quantity: consumedQty,
            unitCost: batch.unitPrice,
            cost,
        });

        totalCost += cost;
        remainingToSell -= consumedQty;
    }

    if (remainingToSell > 0) {
        throw new Error("Insufficient inventory.");
    }

    return {
        totalCost,
        consumedBatches,
    };
};

module.exports = {
    consumeInventory,
};