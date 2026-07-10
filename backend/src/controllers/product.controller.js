const productService = require("../services/product.service");

const createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);

        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};

const getProducts = async (req, res) => {
    try {
        const products = await productService.getProducts();

        res.json(products);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};

module.exports = {
    createProduct,
    getProducts,
};