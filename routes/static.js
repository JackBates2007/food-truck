const path = require('path')
const router = require('express').Router()

const root = path.join(__dirname, '..', 'public')

router.get('/', (request, repsonse) => {

})

router.get('/event/:eventId', (request, repsonse) => {

})

router.get('/admin', (request, repsonse) => {

})

module.exports = router