const MongoClient = require('mongodb').MongoClient
const connString = process.env.MONGODB_URI || `mongodb://localhost:27017`
const DB_NAME = process.env.DB_NAME || 'api_lol'

let instance = null
let isDisconnecting = false

module.exports = {
    connect: () => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(connString, { useNewUrlParser: true }, (err, client) => {
                if (err) { reject(err) }
                instance = client
                resolve(client.db(DB_NAME))
            })
        })
    },
    disconnect: () => {
        if (instance && !isDisconnecting) {
            isDisconnecting = true
            return new Promise((resolve, reject) => {
                instance.close((err, result) => {
                    if (err) {
                        reject(err)
                        isDisconnecting = false
                        return
                    }
                    resolve()
                })
            })
        }
    },
    instance: () => {
        return instance
    }
}