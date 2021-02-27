const router = require('express').Router();
const { createNewNote, filterByQuery, validateNote } = require('../../lib/notes');
const notesDatabase = require('../../db/db.json');

router.get('/notes', (req, res) => {
  let results = notesDatabase;
  console.log("GET NOTES - query is " + JSON.stringify(req.query));
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
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