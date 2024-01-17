const express = require("express");

const router = express.Router();

const BromasController = require("../controllers/broma.controller");

router.post("", BromasController.createBromas);
router.get("", BromasController.getBromas);
router.get("/random", BromasController.getBromasRandom);
router.get("/:id", BromasController.getBromasId);
router.put("/:id", BromasController.updateBromas);
router.delete("/:id", BromasController.deletedateBromas);

module.exports = router;
