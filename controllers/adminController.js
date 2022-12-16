const adminModel = require('../models');

const addUser = (body) => {

    const doc = new adminModel(body);
    const query = {_id : doc._id};
    return adminModel.findOneAndUpdate(query ,doc,{
    upsert : true,
    new : true
    });
};

const updateUser = (body) => {

    const doc = new adminModel(body);
    const query = {_id : doc._id};
    return adminModel.findOneAndUpdate(query ,doc,{
    new : true
    });
};

const deleteUser = (filter) => {
    return adminModel.deleteOne(filter);

};

const getUser = (filter) => {
    return adminModel.findOne(filter);
};

const getAllUsers = (filter) => {
    return adminModel.find(filter);
};
module.exports = {
addUser,
updateUser,
deleteUser,
getUser,
getAllUsers

};
