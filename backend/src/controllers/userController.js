const User = require('../models/user');

module.exports = { 
    async getAllUsers(req, res){
        try{
            const findedUsers = await User.find({}).lean();
            if(findedUsers == null){
                res.status(204).json({ message:"There is not users to show!" });
            }else{
                res.status(200).json({
                    findedUsers
                });
            }
        }catch(err){
            res.status(400).json({ message:"Something has failed: "+err.message });
        }
    },
    async createOneUser(req, res){
        const { username, name, age } = req.body;
        try{
            const newUser = new User({
                username:username,
                name:name,
                age:age
            });
            const userSaved = await newUser.save();
            if(userSaved){
                res.status(200).json({
                    message:"User has been created sucessfully!",
                });
            }
        }catch(err){
            res.status(400).json({ message:"Something has failed: "+err.message });
        }
    },
    async deleteOneUser(req, res){
        const { id } = req.params;
        try{
            const deletedUser = await User.deleteOne({
                _id:id
            });
            if(deletedUser){
                res.status(200).json({ message:"User has been deleted sucessfully." });
            }
        }catch(err){
            res.status(400).json({ message:"Something has failed: "+err.message });
        }
    }
}