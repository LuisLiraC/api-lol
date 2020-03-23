const { MongoClient, ObjectID } = require('mongodb')
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017'
const DB_NAME = process.env.DB_NAME || 'api_lol'

class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    this.dbName = DB_NAME
  }

  connect() {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect(async err => {
          if (err) {
            reject(err)
          }
          console.log('Connected succesfully to Mongo')
          resolve(this.client.db(this.dbName))
        })
      })
    }
    return MongoLib.connection
  }

  getAll(collection, query, limit, offset) {
    return this.connect().then(db => {
      return db.collection(collection).find(query).skip(parseInt(offset)).limit(parseInt(limit)).toArray()
    })
  }

  getOne(collection, name) {
    return this.connect().then(db => {
      return db.collection(collection).findOne({ name })
    })
  }

  create() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          message: `champion created sucessfully`
        })
      }, 1000)
    })
  }

  update(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          message: `${name} updated sucessfully`
        })
      }, 1000)
    })
  }

  delete(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          message: `${name} deleted sucessfully`
        })
      }, 1000)
    })
  }

}

module.exports = MongoLib