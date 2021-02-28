const router = require('express').Router();
const { createNewNote, deleteNote, filterByQuery, validateNote } = require('../../lib/notes');
const notesDatabase = require('../../db/db.json');

// get notes
router.get('/notes', (req, res) => {
  let results = notesDatabase;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

// delete  by id  &&&&&&&&&&
router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, notesDatabase);
    res.json(notesDatabase);
});

// post new note
router.post('/notes', (req, res) => {
  if (!validateNote(req.body)) {
    res.status(400).send('This note is not properly formatted.');
  } else {
    const note = createNewNote(req.body, notesDatabase);
    res.json(note);
  }
});

module.exports = router;