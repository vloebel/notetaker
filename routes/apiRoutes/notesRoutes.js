const router = require('express').Router();
const { createNewNote, filterByQuery, validateNote } = require('../../lib/notes');
const notesDatabase = require('../../db/db.json');

//GET and POST routes for our notes database

router.get('/notes', (req, res) => {
  let results = notesDatabase;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

// get by id => delete &&&&&&&&&&
router.post('/notes/:id', (req, res) => {
    let results = notesDatabase;
    const results = deleteNote(req.params.id, notesDatabase);
    res.json(results);
});

router.post('/notes', (req, res) => {
  if (!validateNote(req.body)) {
    res.status(400).send('This note is not properly formatted.');
  } else {
    const note = createNewNote(req.body, notesDatabase);
    res.json(note);
  }
});

module.exports = router;