const Task = require('../models/task');
const User = require('../models/user');

module.exports = { 
    async getAllTask(req, res){
        try{
            const AllTask = await Task.find({}).lean();
            if(AllTask == null){
                res.status(204).json({ message:"There is not task to show!" });
            }else{
                res.status(200).json({
                    AllTask
                });
            }
        }catch(err){
            res.status(400).json({ message:"Something has failed: "+err.message });
        }
    },
    async getTaskByUser(req, res){
        const { id } = req.params;
        try{
            const specificUser = await User.findOne({
                _id:id
            });
            if(specificUser != null){
                const allTaskByUser = await Task.find({
                    responsable:specificUser.username
                });
                if(allTaskByUser == null){
                    res.status(204).json({ message:"There is not task for the specific user to show!" });
                }else{
                    res.status(200).json({
                        allTaskByUser
                    });
                }
            }
        }catch(err){
            res.status(400).json({ message:"Something has failed: "+err.message });
        }
    },
    async createOneTask(req, res){
        const { taskname, description, responsable, priority, tags } = req.body;
        try{
            const newTask = new Task({
                taskname:taskname, 
                description:description, 
                responsable:responsable, 
                priority:priority, 
                tags:tags,
                complete:false
            });
            try{
                const taskSaved = await newTask.save();
                if(taskSaved){
                    res.status(200).json({
                        message:"The task has been created!",
                    });
                } 
            }catch(err){
                res.status(400).json({message:"Task uncreated: "+err.message})
                
            }            
        }catch(err){
            res.status(400).json({ message:"Something has failed: "+err.message });
        }
    },
    async updateOneTask(req, res){
        const { id } = req.params;
        const { taskname, description, priority } = req.body;
        try{
            const updatedTask = await Task.updateOne({
                _id:id
            },{
                taskname:taskname,
                description:description,
                priority:priority
            });
            if(updatedTask['nModified'] != 0){
                res.status(200).json({
                    message:"The task has been updated successfully!",
                });
            }else{
                res.status(400).json({
                    message:"Task don't found."
                });
            }
        }catch(err){
            res.status(400).json({ message:"Something has failed: "+err.message });
        }
    },
    async markCompletedTask(req, res){
        const { id } = req.params;
        try{
            const updatedTask = await Task.updateOne({
                _id:id
            },{
                complete:true
            });
            if(updatedTask['nModified'] != 0){
                res.status(200).json({
                    message:"The task has been mark as completed!",
                });
            }else{
                res.status(400).json({
                    message:"Task don't found."
                });
            }
        }catch(err){
            res.status(400).json({ message:"Something has failed: "+err.message });
        }
    },
    async deleteOneTask(req, res){
        const { id } = req.params;
        try{
            const deletedTask = await Task.deleteOne({
                _id:id
            });
            if(deletedTask){
                res.status(200).json({message:"Task deleted sucessfully."});
            }
        }catch(err){
            res.status(400).json({ message:"Something has failed: "+err.message });
        }
    },
    async addResponsable(req, res){
        const { id } = req.params;
        const { responsable } = req.body;
        try{
            const updatedTask = await Task.updateOne({
                _id:id
            },{
                responsable: responsable
            });
            if(updatedTask['nModified'] != 0){
                res.status(200).json({
                    message:"Add a responsable for the specific task sucessfully!",
                });
            }else{
                res.status(400).json({
                    message:"Task don't found."
                });
            }
        }catch(err){
            res.status(400).json({ message:"Something has failed: "+err.message });
        }
    }
}