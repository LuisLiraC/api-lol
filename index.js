const express = require('express')
const app = express()
const mongo = require('./db/connect')
const port = process.env.PORT || 3000
const cors = require('cors')

app.use(cors())
require('./routes/views')(app)
require('./routes/api')(app)
require('./routes/error')(app)

async function initMongo() {
    const db = await mongo.connect()
    if (db) { initExpress() }
}

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