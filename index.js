const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static(path.join(process.cwd(), 'ExerciseTwo')));

app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'ExerciseTwo', 'index.html')); 
});

app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});