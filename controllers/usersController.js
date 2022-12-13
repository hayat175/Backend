const{
    userModel
} = require('../models');
 
const addUser = (body) => {  //function/query stored in variable 'addUser'
const doc = new userModel(body);
const query = {_id : doc._id };  //same as 'where' in sql 
return userModel.findOneAndUpdate(query,doc,{
    upsert : true, //upsert is used to add new objects/records in DB 
    new : true}); //always returns the latest/new record in BD
};
const updateUser = (body) => {       //function/query stored in variable 'addUser'
    const doc = new userModel(body);
    const query = {_id : body._id };      //same as 'where' in sql 
    return userModel.findOneAndUpdate(query,doc,{  // filters using Id and update
    new : true});      //always returns the latest/new record in BD
    };

    const deleteUser = (filter) => {       //function/query stored in variable 'addUser'
        return userModel.deleteOne(filter);      //always returns the latest/new record in BD
        };


        const getUser = (filter) => {       //function/query stored in variable 'addUser'
            return userModel.findOne(filter);      //always returns the latest/new record in BD
            };
        

            const getAllUsers = (filter) => {       //function/query stored in variable 'addUser'
                return userModel.find(filter);      //always returns the latest/new record in BD
                };

module.exports = {
addUser,
updateUser,
deleteUser,
getUser,
getAllUsers
}