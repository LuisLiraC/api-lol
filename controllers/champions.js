const MongoLib = require('../db/mongo')

class ChampionsController {
  constructor() {
    this.collection = 'champions'
    this.mongoDb = new MongoLib()
  }

  async getChampions(query, limit, offset) {
    const champions = await this.mongoDb.getAll(this.collection, query, limit, offset)
    return champions || []
  }

  async getChampion(name) {
    const champion = await this.mongoDb.getOne(this.collection, name)
    return champion || {}
  }

  async createChampion() {
    const createdChampion = await this.mongoDb.create()
    return createdChampion || {}
  }

  async updateChampion(name) {
    const updatedChampion = await this.mongoDb.update(name)
    return updatedChampion || {}
  }

  async deleteChampion(name) {
    const deletedChampion = await this.mongoDb.delete(name)
    return deletedChampion || {}
  }
}

module.exports = ChampionsController