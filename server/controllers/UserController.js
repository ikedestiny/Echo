const userModel = require('../models/UserModel')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const createToken = (_id) => (jwt.sign({ _id }, process.env.JWT_SECRET_KEY, { expiresIn: "20m" }))

const RegisterUser = async (req, res) => {
    const { username, email, password } = req.body

    try {
        if (!username || !email || !password) return res.status(400).json("all fields are required");
        const existingUser = await userModel.findOne({ email });
        if (existingUser) return res.status(400).json("account with this email already exist. Try to log in instead")
        if (!validator.isEmail(email)) return res.status(400).json("not a valid email")
        if (!validator.isStrongPassword(password)) return res.status(400).json("passowrd too simple")
        const hash = await bcrypt.hash(password, await bcrypt.genSalt(10))
        const newUser = new userModel({ username, email, password: hash })
        await newUser.save()
        return res.status(201).json({ _id: newUser.id, email: newUser.email, username: newUser.username })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}
const LoginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const foundUser = await userModel.findOne({ email })
        if (!foundUser) return res.status(400).json("invalid email or password")
        const isValidPassword = await bcrypt.compare(password, foundUser.password)
        if (!isValidPassword) return res.status(400).json("invalid email or password")
        const token = createToken(foundUser._id)
        return res.status(200).json({ foundUser, token })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const FindAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find()
        return res.status(200).json(allUsers)
    } catch (error) {
        return res.status(500).json(error)
    }
}
const FindById = async (req, res) => { }

const DeleteUserById = async (req, res) => {
    try {
        const id = req.params.userId
        const deletedUser = await userModel.findByIdAndDelete({ _id: id })
        if (!deletedUser) return res.status(400).json("no user with such id")
        return res.status(200).json(deletedUser)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { RegisterUser, LoginUser, FindAllUsers, FindById, DeleteUserById }