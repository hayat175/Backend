const mongoose = require('mongoose');
const clientSchema = new mongoose.Schema({

    firstName : {
        type : String,
        require : true
    },
    lastName : {
        type : String,
        require : true
    },
    age : {
        type : String,
        require : true
    },
    dob : {
        type : Date,
        require : true
    },
    userType : {
        kind : {
            type : String,
            enum : ['client'],
        },
        item : {
            type : mongoose.Types.ObjectId,
            refPath : 'userType.kind'
        }
    }
},
{
    collection : 'client'
});

module.exports=mongoose.model('client' , clientSchema)