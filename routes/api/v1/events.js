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
    response.send(found)
})

router.get('/events/:id', async (request, response) => {
    const { ObjectId } = request.params
    const collection = await getMenu()
    console.log(collection.find().toArray())
    response.send('done')
})

router.post('/events', async (request, response) => {
    const { name, category, description, price, image } = request.body
    const collection = await getMenu()
    const { acknowledged, insertedID } = await collection.insertOne({ name, category, description, price, image })
    response.send({ acknowledged, insertedID })
})
module.exports = router