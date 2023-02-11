const {documentsController} = require('../../controllers');
const addClientDocument = (body) => {

    try {
        const result = documentsController.addDocument(body);
        return result;
    

    }catch(error){
      return Promise.reject(error);
    }

}
 const updateClientDocument = (body) => {
  try {
      const result = documentsController.updateDocument(body);
      return result;
  }catch(error){

    return Promise.reject(error)
  }
 }

 const deleteClientDocument = (filter) => {
     return documentsController.deleteDocument(filter);
 }

 const getClientDocument = (filter) =>{
  return documentsController.getDocument(filter);
 }

 const getClientAllDocuments = (filter) =>{
  return documentsController.getAllDocuments(filter);
 }

module.exports = {addClientDocument,updateClientDocument,deleteClientDocument,getClientDocument,getClientAllDocuments};