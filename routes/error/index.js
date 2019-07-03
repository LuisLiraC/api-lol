module.exports = (app) => {
    app.get('*', (req, res) => {
        res.send('Route not found')
    })
}