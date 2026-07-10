const express = require("express");

const router = express.Router();

const ledgerController = require("../controllers/ledger.controller");

router.get("/", ledgerController.getLedger);

module.exports = router;