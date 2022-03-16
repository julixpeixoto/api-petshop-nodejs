const router = require('express').Router()
const { request } = require('express')
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

router.get('/:id', async (request, respose) => {

    try {
        const id = request.params.id
        const providerFound = new Provider({id: id})
        await providerFound.load(id)
        respose.send(JSON.stringify(providerFound))        
    } catch (error) {
        respose.status(404).send(JSON.stringify({ 
            message: error.message
        }))
    }

})

module.exports = router