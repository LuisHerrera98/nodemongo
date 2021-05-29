const { Router } = require('express');
const router = Router();
const { renderData, addData} = require('../controllers/data.controller');

//GET ALL DATA

router.get('/api/v1/all-data', renderData);

// ADD DATA

router.post('/api/v1/add-data', addData);

//router.post('/notes/new-note', createdNewNote);

module.exports = router;