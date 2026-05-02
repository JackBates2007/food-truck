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
    response.send(found)
})

router.get('/:id', async (request, response) => {
    const { id } = request.params
    const collection = await getEvents()
    const found = await collection.findOne({ _id: new ObjectId(id) })
    response.send(found)
})

router.post('/events', async (request, response) => {
    const { name, category, description, price, image } = request.body
    const collection = await getEvents()
    const { acknowledged, insertedID } = await collection.insertOne({ name, category, description, price, image })
    response.send({ acknowledged, insertedID })
})
module.exports = router