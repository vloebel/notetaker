const fs = require('fs');
const path = require('path');
const express = require('express');
const { notesDb } = require('./db/db');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);
  
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));//works with or without the ./public/??
});
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
