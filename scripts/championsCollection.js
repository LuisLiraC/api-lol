const MongoLib = require('../db/mongo')
const argv = require('yargs').argv
const data = require('../resources/champions.json')
const mongo = new MongoLib()

if (argv.fill) {
  mongo.connect()
    .then(db => { 
      db.collection('champions').insertMany(data, (err, result) => {
        if (err) throw err
        console.log('Collection filled successfully')
        process.exit()
      })
    })
  return
}

if (argv.clear) {
  mongo.connect()
    .then(db => {
      db.collection('champions').drop((err, result) => {
        if (err) throw err
        console.log('Collection deleted successfully')
        process.exit()
      })
    })
  return
}