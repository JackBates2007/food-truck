const path = require('path')
const router = require('express').Router()

const root = path.join(__dirname, '..', 'public', 'html')

router.get('/', (request, response) => {
    response.sendFile('index.html', { root })
})

router.get('/events/:id', (request, response) => {
    response.sendFile('index.html', { root })
})

router.get('/admin', (request, response) => {
    response.sendFile('index.html', { root })
})

module.exports = router