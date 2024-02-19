
const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.json({ 'hey': 'Hello World!' })
})

app.listen(port, () => {
  console.log(`Example listening on port ${port}`)
})
