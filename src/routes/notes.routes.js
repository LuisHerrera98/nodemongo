const { Router } = require('express');
const router = Router();
const { 
    renderNotesForm,
    createdNewNote, 
    renderNotes, 
    renderEditForm, 
    updateNote, 
    deleteNote 
} = require('../controllers/notes.controller');

// NEW NOT // GET ALL

router.get('/notes/add', renderNotesForm);
router.post('/notes/new-note', createdNewNote);

//GET ALL NOTE

//get para mostrar detalles por id
router.get('/notes',renderNotes);

//EDIT NOTES
router.get('/notes/edit/:id',renderEditForm);
router.post('/notes/edit/:id',updateNote);

//DELETE NOTES
router.delete('/notes/delete/:id',deleteNote);

module.exports = router;