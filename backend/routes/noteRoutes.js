const express = require('express');
const router = express.Router();
const {getNotes , createNotes,deleteNote} = require('../controllers/noteController');

router.route('/').get(getNotes).post(createNotes);
router.route('/:id').delete(deleteNote);

module.exports = router;