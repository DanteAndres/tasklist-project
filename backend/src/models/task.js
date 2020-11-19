const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    taskname:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    responsable:{
        type:String,
        required:true
    },
    priority:{
        type:String
    },
    tags:{
        type:Array
    },
    complete:{
        type:Boolean
    }
},{
    collection: 'task'
});

module.exports = mongoose.model('Task',TaskSchema);