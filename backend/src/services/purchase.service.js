const prisma = require("../config/prisma");
const { publishEvent } = require("../kafka/producer");
const { INVENTORY_EVENTS } = require("../kafka/topics");

const createPurchase = async (data) => {
  const product = await prisma.product.findUnique({
    where: {
      id: data.productId,
    },
  });

  if (!product) {
    throw new Error("Product not found");
  }

  const purchase = await prisma.inventoryBatch.create({
    data: {
      productId: data.productId,
      quantity: data.quantity,
      remainingQuantity: data.quantity,
      unitPrice: data.unitPrice,
    },
  });

  if (process.env.ENABLE_KAFKA === "true") {
    await publishEvent(INVENTORY_EVENTS, {
      type: "PURCHASE_CREATED",
      purchaseId: purchase.id,
      productId: purchase.productId,
      quantity: purchase.quantity,
      unitPrice: purchase.unitPrice,
      createdAt: purchase.createdAt,
    });
  }

  return purchase;
};

module.exports = {
  createPurchase,
};
