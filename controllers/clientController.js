const {clientModel} = require('../models');

const addUser = (body) => {

    const doc = new clientModel(body);
    const query = {_id : doc._id};
    return clientModel.findOneAndUpdate(query,doc,{
    upsert : true,
    new : true
    });
       };

const updateUser = (body) => {

    const doc = new clientModel(body);
    const query = {_id : doc._id};
    return clientModel.findOneAndUpdate(query,doc,{
    new : true
    });
        };

const deleteUser = (filter) => {
    return clientModel.deleteOne(filter);
};

const getUser = (filter) => {
    return clientModel.findOne(filter);
};

const getAllUsers = (filter) => {
    return clientModel.find(filter);
};

module.exports = {
addUser,
updateUser,
deleteUser,
getUser,
getAllUsers

};
