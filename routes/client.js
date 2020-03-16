const express = require('express')
const router = express.Router()

module.exports = (app) => {
  app.use('/', router)

  router.get('/', (req, res) => {
    res.render('index')
  })
  
  router.get('/docs', (req, res) => {
    res.render('docs')
  })
}