const express = require('express');
const os = require('os')

const PORT = 8080;
const HOST = '0.0.0.0';
const HOSTNAME = os.hostname();;
// App
const app = express();
app.get('/', (req, res) => {
  res.send(`Running on ${HOSTNAME}`);
});

app.listen(PORT, HOST);
console.log(`Running on ${HOSTNAME}`);