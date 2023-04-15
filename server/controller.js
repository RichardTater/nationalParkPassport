const parks = require('./db.json')
const passport = []

module.exports = {
    getParks: (req, res) => res.status(200).send(parks),
    getPassport: (req, res) => res.status(200).send(passport),
    addToPassport: (req, res) => {
        let id = req.params.id
        let park = parks.find((p) => p.id === +id)
        passport.push(park)
        res.status(200).send()
    },
    deleteFromPassport: (req, res) => {
        let id = req.params.id
        let index = passport.findIndex((park) => park.id === +id)
        if(index < 0){
            res.status(404).send()
            return
        }
        passport.splice(index, 1)
        res.status(200).send()
    },
    updateNotes: (req, res) => {
        let id = req.params.id
        let park = passport.find((p) => p.id === +id)
        if(park === undefined){
            res.status(404).send()
            return
        }
        park.notes = req.body.notes
        res.status(200).send()
    }
}