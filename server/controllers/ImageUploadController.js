const UserModel = require('../models/UserModel')

const UploadProfilePic = async (req, res) => {
    const userId = req.params.userId;
    console.log("Received request to upload profile pic");
    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            console.log("User not found");
            return res.status(404).json({ message: "user not found" })
        }
        console.log("File received:", req.file);
        user.profilePhoto = req.file.path //cloudinary url
        await user.save()

        return res.json({ message: "Profile updated", profilePic: user.profilePic });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = { UploadProfilePic }