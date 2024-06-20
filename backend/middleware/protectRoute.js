const jwt = require("jsonwebtoken");
const User = require("../model/user.model");

const protectRoute = async (req, res, next) => {
    try {
        // console.log(req);
        const token = req.cookies.jwt;

        console.log(req);

        if (!token) {
            return res.status(401).json({
                error: "Unauthorized - No Token Provided"
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (!decoded) {
            return res.status(401).json({
                error: "Unauthorized - Invalid Token"
            })
        }

        const user = await User.findById(decoded.userId).select("-password")

        if (!user) {
            return res.status(404).json({
                error: "User Not Found"
            })
        }

        req.user = user

        next()

    } catch (error) {
        console.log('Error in Protect Route MiddleWare', error);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

module.exports = protectRoute