const router = require('express').Router()
const ModelProviders = require('./ModelProviders')

router.use('/', async (request, response) => {
    const results = await ModelProviders.findAll()
    response.send(JSON.stringify(results))
})

module.exports = router