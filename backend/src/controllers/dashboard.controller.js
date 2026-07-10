const dashboardService = require("../services/dashboard.service");

const getDashboard = async (req, res) => {
    try {
        const dashboard = await dashboardService.getDashboard();

        res.json({
            success: true,
            data: dashboard
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

module.exports = {
    getDashboard
};