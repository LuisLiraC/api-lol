const API_PATH = '/api'
const { getChampions, getChampionByName, createChampion, deleteChampion, updateChampion } = require('../../db')

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
      res.send(champion)
    } catch (error) {
      next(error)
    }
  })

  app.post(`${API_PATH}/champions`, async (req, res, next) => {
    try {   
      const createdChampion = await createChampion()
      res.statusCode = 201
      res.send(createdChampion)
    } catch(err) {
      next(err)
    }
  })

  app.delete(`${API_PATH}/champions/:name`, async (req, res, next) => {
    try {
      const deletedChampion = await deleteChampion()
      res.statusCode = 200
      res.send(deletedChampion)
    } catch(err) {
      next(err)
    }
  })

  app.put(`${API_PATH}/champions/:name`, async (req, res, next) => {
    try {
      const updatedChampion = await updateChampion()
      res.statusCode = 201
      res.send(updatedChampion)
    } catch(err) {
      next(err)
    }
  })
}