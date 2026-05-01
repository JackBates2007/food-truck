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
    console.log(found)
    response.send(found)
})

router.get('/menu/:id', async (request, response) => {
    const { ObjectId } = request.params
    const collection = await getMenu()
    console.log(collection.find().toArray())
    response.send('done')
})

router.post('/menu', async (request, response) => {
    const { name, category, description, price, image } = request.body
    const collection = await getMenu()
    const { acknowledged, insertedID } = await collection.insertOne({ name, category, description, price, image })
    response.send({ acknowledged, insertedID })
})
module.exports = router