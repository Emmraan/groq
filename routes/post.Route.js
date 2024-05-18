const express = require("express");
const formHandler = require("../controllers/formHandler")
const router = express.Router();

// Route handler for processing form submission
router.post("/chat/model", formHandler);

module.exports = router;
