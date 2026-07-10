const prisma = require("../config/prisma");
const fifoService = require("./fifo.service");
const { publishEvent } = require("../kafka/producer");
const { INVENTORY_EVENTS } = require("../kafka/topics");

const createSale = async (data) => {
  console.log("Sale Data:", data);

  const fifoResult = await fifoService.consumeInventory(
    data.productId,
    data.quantity,
  );

  return await prisma.$transaction(async (tx) => {
    // Create Sale
    const sale = await tx.sale.create({
      data: {
        productId: data.productId,
        quantity: data.quantity,
        totalCost: fifoResult.totalCost,
      },
    });

    // Update Inventory Batches
    for (const item of fifoResult.consumedBatches) {
      await tx.inventoryBatch.update({
        where: {
          id: item.batchId,
        },
        data: {
          remainingQuantity: {
            decrement: item.quantity,
          },
        },
      });

      await tx.saleDetail.create({
        data: {
          saleId: sale.id,
          batchId: item.batchId,
          quantity: item.quantity,
          unitCost: item.unitCost,
        },
      });
    }
    if (process.env.ENABLE_KAFKA === "true") {
      await publishEvent(INVENTORY_EVENTS, {
        type: "SALE_CREATED",
        saleId: sale.id,
        productId: sale.productId,
        quantity: sale.quantity,
        totalCost: sale.totalCost,
        createdAt: sale.createdAt,
      });
    }

    return sale;
  });
};

module.exports = {
  createSale,
};
