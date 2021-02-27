const fs = require('fs');
const path = require('path');

// makes sure the note title and body are both strings
validateNote = (note => {
  if (!note.title || typeof note.title !== 'string') return false;
  else if (!note.text || typeof note.text !== 'string') return false;
  else return true;
});

// searches the db for a matching title
function filterByQuery(query, notesArray) {
  let filteredResults = notesArray;
  if (query.title) {
    console.log(`query.title is ${query.title}`);
  
    filteredResults = filteredResults.filter(note => note.title === query.title);
  }
  return filteredResults;
}

    

function createNewNote(body, notesArray) {
  const note = body;
  note.id = notesArray.length;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notesArray, null, 2)
  );
  return note;
}
module.exports = {
  validateNote,
  createNewNote,
  filterByQuery,
  
};
