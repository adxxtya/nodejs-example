const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.json({ 'hey': 'Hello Worlds!' });
});

app.get('/health-check', (req, res) => {
  const currentDate = new Date().toISOString();
  res.status(200).json({ 'status': 'ok', 'currentDate': currentDate });
});

app.listen(port, () => {
  console.log(`Example listening on port ${port}`);
});
