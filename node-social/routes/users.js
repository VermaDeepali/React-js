const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");
// update user

router.put("/:id", async (req, res) => {
    try {
        if (req.body.userId == req.params.id || req.body.isAdmin) {
            if (req.body.password) {
                try {
                    const salt = await bcrypt.genSalt(10);
                    req.body.password = await bcrypt.hash(req.body.password, salt);

                } catch (error) {
                    return res.status(500).json(error)
                }
            }
        } else {
            return res.status(403).json("You can update only your account")
        }

        const user = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        });
        res.status(200).json("Account has been updated!")

    } catch (error) {
        return res.status(500).json(error)
    }
})

// delete user
router.delete("/:id", async (req, res) => {
    try {
        if (req.body.userId == req.params.id || req.body.isAdmin) {
            const user = await User.findByIdAndDelete(req.params.id);
        } else {
            return res.status(403).json("You can delete only your account")
        }
        res.status(200).json("Account has been deleted!")

    } catch (error) {
        return res.status(500).json(error)
    }
})
// get a user

router.get("/:id", async (req, res) => {
    try {
        let user = await User.findById(req.params.id);
        !user && res.status(404).send("user not found!");

        const { password, updatedAt, ...other } = user._doc // ...other is spread other properties of user and _doc carry all the objects of a user

        res.status(200).json(other)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// follow a user

router.put("/:id/follow", async (req, res) => {
    try {
        if (req.body.userId !== req.params.id) {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } })
                await currentUser.updateOne({ $push: { followings: req.params.id } })
                res.status(200).json("user has been followed")
            } else {
                res.status(403).json("you already follow this user!")
            }
        } else {
            res.status(403).json("you cant follow yourself!")
        }
    } catch (error) {
        return res.status(500).json(error)
    }
})

// unfollow a user

router.put("/:id/unfollow", async (req, res) => {
    try {
        if (req.body.userId !== req.params.id) {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } })
                await currentUser.updateOne({ $pull: { followings: req.params.id } })
                res.status(200).json("user has been unfollowed")
            } else {
                res.status(403).json("you dont follow this user!")
            }
        } else {
            res.status(403).json("you cant unfollow yourself!")
        }
    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = router;