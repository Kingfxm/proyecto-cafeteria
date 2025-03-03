const express = require("express");
const {
  createEntry,
  getEntries,
  getMiniBlogEntries,
} = require("../controllers/blogController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getEntries);
router.get("/mini", getMiniBlogEntries);
router.post("/", verifyToken, createEntry);

module.exports = router;
