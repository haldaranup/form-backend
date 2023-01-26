const express = require("express");
const { registerUser, getAllUser } = require("../controllers/user.controller");

const router = express.Router();

router.post("/register", registerUser);
router.get("/users", getAllUser);

module.exports = router;
