const router = require('express').Router()
const { getCollection, ObjectId } = require('../../../dbconnect')
let collection = null
const getMenu = async () => {
    if (!collection) collection = await getCollection('Food-Truck', 'Menu-Items')
    return collection
}
router.get('/', async (request, response) => {
    const collection = await getMenu()
    const found = await collection.find().toArray()
    response.send(found)
})

router.get('/:id', async (request, response) => {
    const { id } = request.params
    const collection = await getMenu()
    const found = await collection.findOne({ _id: new ObjectId(id) })
    response.send(found)
})

router.post('/', async (request, response) => {
    const { name, category, description, price, image } = request.body
    const collection = await getMenu()
    const { acknowledged, insertedId } = await collection.insertOne({ name, category, description, price, image })
    response.send({ acknowledged, insertedId })
})
module.exports = router