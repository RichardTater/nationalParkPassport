const parks = require('./db.json')
const passport = []

module.exports = {
    getParks: (req, res) => res.status(200).send(parks),
    getPassport: (req, res) => res.status(200).send(passport),
    addToPassport: (req, res) => {
        let id = req.params.id
        let index = parks.findIndex((park) => park.id === +id)
        passport.push(parks[index])
        res.status(200).send(passport)
    },
    deleteFromPassport: (req, res) => {
        let id = req.params.id
        let index = passport.findIndex((park) => park.id === +id)
        passport.splice(index, 1)
        res.status(200).send(passport)
    },
    addNotes: (req, res) => {

        res.status(200).send(something)
    },
    updateNotes: (req, res) => {
        // let index = req.params.id - 1

        res.status(200).send(something)
    }
}