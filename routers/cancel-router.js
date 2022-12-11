const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.post('/', async (req, res) => {
    const arrID = req.body.id
    if (Array.isArray(arrID)) {
        res.send(JSON.stringify({messages: 'accepted id of the items we want to cancel'}));
    } else {
        res.send(404);
    }

})

module.exports = router