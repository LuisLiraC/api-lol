const API_PATH = '/api'
const { getChampions, getChampionByName } = require('../../db')

module.exports = (app) => {
    app.get(`${API_PATH}/champions`, async (req, res) => {
        const champions = await getChampions()
        res.json(champions)
    })

    app.get(`${API_PATH}/champions/:name`, async (req, res) => {
        const name = req.params.name.toLowerCase()
        const champion = await getChampionByName(name)
        res.json(champion)
    })
}