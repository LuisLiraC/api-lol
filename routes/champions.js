const express = require('express')
const router = express.Router()
const ChampionsController = require('../controllers/champions')

module.exports = (app) => {
  app.use('/api/champions', router)
  const championsController = new ChampionsController()

  router.get('/', async (req, res) => {
    try {
      const { query } = req
      const { limit } = query
      delete query.limit
      const champions = await championsController.getChampions(query, limit)
      res.status(200).json(champions)
    } catch (error) {
      console.log(error)
    }
  })

  router.get('/:name', async (req, res) => {
    try {
      const { name } = req.params
      const champion = await championsController.getChampion(name.toLocaleLowerCase())
      res.status(200).json(champion)
    } catch (error) {
      console.log(error)
    }
  })

  router.post('/:name', async (req, res) => {
    try {
      const { name } = req.params
      const champion = await championsController.createChampion(name.toLocaleLowerCase())
      res.status(200).json(champion)
    } catch (error) {
      console.log(error)
    }
  })

  router.put('/:name', async (req, res) => {
    try {
      const { name } = req.params
      const champion = await championsController.updateChampion(name.toLocaleLowerCase())
      res.status(200).json(champion)
    } catch (error) {
      console.log(error)
    }
  })

  router.delete('/:name', async (req, res) => {
    try {
      const { name } = req.params
      const champion = await championsController.deleteChampion(name.toLocaleLowerCase())
      res.status(200).json(champion)
    } catch (error) {
      console.log(error)
    }
  })
}