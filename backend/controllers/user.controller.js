const User = require("../model/user.model");

const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id

        const filteredUsers = await User.find({
            _id: {
                $ne: loggedInUserId
            }
        }).select("-password")

        res.status(200).json(filteredUsers)
    } catch (error) {
        console.log('error in get users for sidebar function', error);
        res.status(500).json({
            error: "Internal Server error"
        })
    }
}

module.exports = { getUsersForSidebar }