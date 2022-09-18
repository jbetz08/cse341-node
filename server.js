const express = require('express')
const app = express()

app.use('/', require('./routes'))

app.listen(3000, function() {
  console.log(`Example app listening on port ${port}`)
})