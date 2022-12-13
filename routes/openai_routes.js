const express = require("express");
const { generateImage } = require("../controllers/imageGenerator");
const router = express.Router();

router.post("/generateimage", generateImage);

module.exports = router;