const {getData} = require('../repository');

const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', async (req, res) => {
    let documents = await getData('documents1');

    res.send(documents)
})

module.exports = router