const fs = require('fs');
const path = require('path');


validateNote = (note => {
  if (!note.title || typeof note.title !== 'string') return false;
  else if (!note.text || typeof note.text !== 'string') return false;
  else return true;
});
    

function createNewNote(body, notesArray) {
  const note = body;
  
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notesArray }, null, 2)
  );
  return note;
}
module.exports = {
  validateNote,
  createNewNote,
  
};
