const purchaseService = require("../services/purchase.service");

const createPurchase = async (req, res) => {

    try {

        const purchase = await purchaseService.createPurchase(req.body);

        res.status(201).json({
            success: true,
            data: purchase
        });

    } catch (err) {

        res.status(400).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = {
    createPurchase
};