const ledgerService = require("../services/ledger.service");

const getLedger = async (req, res) => {

    try {

        const ledger = await ledgerService.getLedger();

        res.json({
            success: true,
            data: ledger
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = {
    getLedger
};