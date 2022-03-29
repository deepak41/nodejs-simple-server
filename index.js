const express = require('express');
const PORT = 7700;

const app = express();

app.get('/', (req, res) => {
  res.json("Welcome to NodeJS Server!")
});

app.listen(PORT, () => {console.log(`The server is running at localhost:${PORT}`);});
