const saleService = require("../services/sale.service");

const createSale = async (req, res) => {
    console.log("Request Body:", req.body);
    try {
        console.log(req.body);

        const sale = await saleService.createSale(req.body);

        res.status(201).json({
            success: true,
            data: sale,
        });
    } catch (err) {
        console.error(err.stack);

        res.status(400).json({
            success: false,
            message: err.message
        });
    }
};

module.exports = {
    createSale,
};