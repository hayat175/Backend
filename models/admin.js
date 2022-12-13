const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({

    firstName : {
        type : String,
        require : true
    },
    lastName : {
        type : String,
        require : true
    },
    
    userType : {
        kind : {
            type : String,
            enum : ['admin']
        },
        item : {
            type : mongoose.Types.ObjectId,
            refPath : 'userType.kind'
        }

    }
},{
    collection : 'admin'
});

module.exports=mongoose.model('admin' , adminSchema)
