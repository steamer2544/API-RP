const express = require('express')
const router = express.Router()
//const Subscriber = require('.../modules/subscriber')

// Getting all
router.get('/', (req, res) => {
    res.send('Hello World')
})

// Getting One
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})
// Creatign One

// Updating One

// Deleting One




module.exports = router