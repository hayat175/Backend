const {documentsController} = require('../../controllers');
const addClientDocument = (body) => {

    try {
        const result = documentsController.addDocument(body);
        return result;
    

    }catch(error){
      return Promise.reject(error);
    }

}

module.exports = {addClientDocument};