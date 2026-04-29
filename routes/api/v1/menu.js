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
    response.send('done')
})

router.get('/menu/:id', async (request, response) => {
    const { ObjectId } = request.params
    const collection = await getMenu()
    console.log(collection.find().toArray())
    response.send('done')
})

router.post('/menu', (request, response) => {

})
module.exports = router