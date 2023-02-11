const express = require('express');
const router = express.Router();

const adminDocumentsBean = require('../beans/admin/adminDocumentsBean');

router.get('/', async(req, res, next) => {
    const query = req.query;
    try {
        const result = await adminDocumentsBean.listAllDocuments(query);
        return res.status(200).send(result);
    } catch (ex) {
        return res.status(500).send(ex);
    }
});

module.exports = router;