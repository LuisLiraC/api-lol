const mongo = require('./connect')
const DB_NAME = process.env.DB_NAME || 'api_lol'


module.exports = {
  getChampions: () => {
    const db = mongo.instance().db(DB_NAME)
    const data = db.collection('champions').find().toArray()
    return data
  },
  getChampionByName: (name) => {
    const db = mongo.instance().db(DB_NAME)
    const data = db.collection('champions').findOne({ name: name })
    return data
  },
  createChampion: () => {
    const createdChampion = new Promise((res, rej) => {
      setTimeout(() => {
        res({ 
          result: "champion created"
        })
      }, 2000);
    })
    return createdChampion
  },
  deleteChampion: () => {
    const deletedChampion = new Promise((res, rej) => {
      setTimeout(() => {
        res({
          result: "champion deleted"
        })
      }, 2000);
    })
    return deletedChampion
  },
  updateChampion: () => {
    const updatedChampion = new Promise((res, rej) => {
      setTimeout(() => {
        res({
          result: "champion updated"
        })
      }, 2000);
    })
    return updatedChampion
  }
}