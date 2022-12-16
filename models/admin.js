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
    
    
},{
    collection : 'admin'
});

module.exports=mongoose.model('admin' , adminSchema)
