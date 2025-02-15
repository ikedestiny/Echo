const express = require("express")

const router = express.Router()

const { RegisterUser, LoginUser, FindAllUsers, DeleteUserById } = require("../controllers/UserController")
router.post("/register", RegisterUser)
router.post("/login", LoginUser)
router.get("/all", FindAllUsers)
router.delete("/delete/:userId", DeleteUserById)

module.exports = router

