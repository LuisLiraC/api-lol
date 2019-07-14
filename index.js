const express = require('express')
const mongo = require('./db/connect')
const path = require('path')
const cors = require('cors')
const port = process.env.PORT || 3000

// App
const app = express()

// Middlewares
app.use(cors())

// Static files
app.use('/static', express.static(path.join(__dirname, 'public')))

// Routes
require('./routes/views')(app)
require('./routes/api')(app)
require('./routes/error')(app)

// DB Connect function
async function initMongo() {
  try {
    const db = await mongo.connect()
    if (db) { initExpress() }
  } catch (error) {
    throw error
  }
}

// Server init function
function initExpress() {
  app.listen(port, () => {
    console.log(">>> Servidor iniciado")
    process.on('SIGINT', closeApp)
    process.on('SIGTERM', closeApp)
  })
}

function closeApp() {
  mongo.disconnect().then(() => process.exit(0))
}

initMongo()