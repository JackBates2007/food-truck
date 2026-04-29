const router = require('express').Router()
const { getCollection, ObjectId } = require('../../../dbconnect')
let collection = null
const getEvents = async () => {
    if (!collection) collection = await getCollection('Food-Truck', 'Events')
    return collection
}
router.get('/', async (request, response) => {
    const collection = await getEvents()
    const found = await collection.find().toArray()
    console.log(found)
    response.send('done')
})
router.get('/events/:id', (request, response) => {

})

router.post('/events', (request, response) => {

})
module.exports = router