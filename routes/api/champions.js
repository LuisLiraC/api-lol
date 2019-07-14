const API_PATH = '/api'
const { getChampions, getChampionByName } = require('../../db')

module.exports = (app) => {
  app.get(`${API_PATH}`, (req, res) => {
    res.redirect('/')
  })

  app.get(`${API_PATH}/champions`, async (req, res, next) => {

    try {
      const champions = await getChampions()
      res.json(champions)
    } catch (error) {
      next(error)
    }

  })

  app.get(`${API_PATH}/champions/:name`, async (req, res, next) => {
    const name = req.params.name.toLowerCase()

    try {
      const champion = await getChampionByName(name)
      res.send(champion[0])
    } catch (error) {
      next(error)
    }

  })
}