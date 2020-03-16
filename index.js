const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')
const champions = require('./routes/champions')
const client = require('./routes/client')
const error = require('./routes/error')


app.use(cors())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use('/static', express.static(path.join(__dirname, 'assets')))

client(app)
champions(app)
error(app)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})