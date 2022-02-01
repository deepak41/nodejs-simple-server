const express = require('express');
const PORT = 7007;

const app = express();

app.get('/', (req, res) => {
  res.json("Welcome to Node Server!")
});

app.listen(PORT, () => {console.log(`The server is running at localhost:${PORT}`);});
