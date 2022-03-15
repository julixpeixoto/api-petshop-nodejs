const router = require('express').Router()
const ModelProviders = require('./ModelProviders')
const Provider = require('./Provider')

router.get('/', async (request, response) => {
    const results = await ModelProviders.findAll()
    response.send(JSON.stringify(results))
})

router.post('/', async (request, response) => {
    const requestData = request.body
    const provider = new Provider(requestData)
    await ModelProviders.create(requestData)
    response.send(JSON.stringify(provider))
})

module.exports = router