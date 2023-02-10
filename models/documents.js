const mongoose = require('mongoose');
const documentsSchema = mongoose.Schema({

    name : {
        type : String,
        required : true,
    },

    size : {
        type : Number,
    },

    path : {
        type : String
    }

},
{
    collection : 'documents'
});
module.exports=mongoose.model('documents' , documentsSchema);