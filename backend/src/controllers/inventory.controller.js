const inventoryService = require("../services/inventory.service");

const getInventory = async (req, res) => {

    try {

        const inventory = await inventoryService.getInventory();

        res.json({
            success: true,
            data: inventory
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = {
    getInventory
};