const prisma = require("../config/prisma");

const createProduct = async (data) => {
    return await prisma.product.create({
        data,
    });
};

const getProducts = async () => {
    return await prisma.product.findMany({
        orderBy: {
            id: "asc",
        },
    });
};

module.exports = {
    createProduct,
    getProducts,
};