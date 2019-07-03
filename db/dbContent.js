const mongo = require('./connect')
const argv = require('yargs').argv
const collection = 'champions'
const data = require(`../resources/${collection}`)

if (argv.fill) {
    mongo.connect()
        .then(db => {
            db.collection(collection).insertMany(data, (err, result) => {
                if (err) throw err
                mongo.disconnect()
            })
        })
    return
}

if (argv.clear) {
    mongo.connect()
        .then(db => {
            db.collection(collection).drop((err, result) => {
                if (err) throw err
                mongo.disconnect()
            })
        })
    return
}