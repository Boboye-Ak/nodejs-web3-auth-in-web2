const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const User = require("./models/usermodel.js")

mongoose.connect(
    `mongodb+srv://boboye:${process.env.MONGO_PASSWORD}@cluster0.r1cxf.mongodb.net/web3-auth-in-web2?retryWrites=true&w=majority`
)

const PORT = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())

app.post("/signup", async (req, res) => {
    const { userName, account, favNumber } = req.body
    let newUser = { userName, account, favNumber }
    console.log("Creating new user")
    newUser = await User.create(newUser)
    console.log(`new user created ${newUser}`)
    res.json(newUser)
})

app.post("/login", async (req, res) => {
    const { account } = req.body
    const user = await User.findOne({ account: account })
    if (!user) {
        res.json({ error: "user not found. please sign up" })
    } else {
        res.json(user)
    }
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
