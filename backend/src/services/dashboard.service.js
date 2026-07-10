const prisma = require("../config/prisma");

const getDashboard = async () => {
  const totalProducts = await prisma.product.count();

  const batches = await prisma.inventoryBatch.findMany();

  const sales = await prisma.sale.aggregate({
    _sum: {
      totalCost: true,
    },
  });

  let totalStock = 0;
  let inventoryValue = 0;

  batches.forEach((batch) => {
    totalStock += batch.remainingQuantity;

    inventoryValue += batch.remainingQuantity * batch.unitPrice;
  });

  return {
    totalProducts,
    totalStock,
    inventoryValue,
    totalSales: sales._sum.totalCost || 0,
  };
};

module.exports = {
  getDashboard,
};
