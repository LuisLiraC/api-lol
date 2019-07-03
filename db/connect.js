const MongoClient = require('mongodb').MongoClient
const connString = process.env.MONGODB_URI || `mongodb://localhost:27017`
const { DB_NAME } = require('./config')

let instance = null
let isDisconnecting = false

module.exports = {
    connect: () => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(connString, { useNewUrlParser: true }, (err, client) => {
                debugger
                if (err) { reject(err) }
                console.log('>>> Conectado a MongoDB')
                instance = client
                resolve(client.db(DB_NAME))
            })
        })
    },
    disconnect: () => {
        if (instance && !isDisconnecting) {
            isDisconnecting = true
            console.log('>>> Desconectando de MongoDB...')
            return new Promise((resolve, reject) => {
                instance.close((err, result) => {
                    if (err) {
                        reject(err)
                        isDisconnecting = false
                        return
                    }
                    console.log('>>> Instancia de MongoDB desconectada')
                    resolve()
                })
            })
        }
    },
    instance: () => {
        return instance
    }
}