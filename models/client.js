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
        type : Number,
        require : true
    },
    dob : {
        type : Date,
        require : true
    },
   
},
{
    collection : 'client'
});

module.exports=mongoose.model('client' , clientSchema)