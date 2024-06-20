const User = require("../model/user.model")
const bcryptjs = require('bcryptjs')
const { generateTokenAndSetCookie } = require("../utils/generateToken")

const login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await User.findOne({ userName })
        if (!user) {
            return res.status(400).json({
                error: "Invalid User Name"
            })
        }
        const isPasswordCorrect = await bcryptjs.compare(password, user.password)
        if (!isPasswordCorrect) {
            return res.status(400).json({
                error: "Invalid Password"
            })
        }
        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName,
            profilePic: user.profilePic
        })
    } catch (error) {
        console.log("error in login Controller ", error);
        res.status(500).json({
            "error": "Internal Server Error"
        })
    }
}

const signup = async (req, res) => {
    try {
        const { firstName, lastName, userName, password, confirmPassword, gender } = await req.body

        if (password !== confirmPassword) {
            return res.status(400).json({
                "error": "Passwords do not match"
            })
        }

        const user = await User.findOne({ userName })

        if (user) {

            return res.status(400).json({
                "error": "User Name already exists"
            })
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const newUser = new User({
            firstName,
            lastName,
            userName,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        generateTokenAndSetCookie(newUser._id, res);
        await newUser.save()

        res.status(201).json({
            _id: newUser._id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            userName: newUser.userName,
            profilePic: newUser.profilePic
        })

    } catch (error) {
        console.log("error in signup Controller ", error);
        res.status(500).json({
            "error": "Internal Server Error"
        })
    }
}

const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0})
        res.status(200).json({
            message: "Logged out Sucessfully"
        })
    } catch (error) {
        console.log("error in logout Controller ", error);
        res.status(500).json({
            "error": "Internal Server Error"
        })
    }
}

module.exports = { login, signup, logout }