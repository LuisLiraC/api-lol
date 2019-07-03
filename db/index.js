const mongo = require('./connect')
const DB_NAME = 'heroku_tw6v1fxb'


module.exports = {
    getChampions: () => {
        const db = mongo.instance().db(DB_NAME)
        const data = db.collection('champions').find().toArray()
        return data
    },
    getChampionByName: (name) => {
        const db = mongo.instance().db(DB_NAME)
        const data = db.collection('champions').find({ name: name }).toArray()
        return data
    }
}