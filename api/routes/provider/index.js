const router = require('express').Router()
const { request } = require('express')
const ModelProviders = require('./ModelProviders')
const Provider = require('./Provider')

router.get('/', async (request, response) => {
    const results = await ModelProviders.findAll()
    response.send(JSON.stringify(results))
})

router.post('/', async (request, response, next) => {

    try {
        const requestData = request.body
        const provider = new Provider(requestData)
        await ModelProviders.create(requestData)
        response.status(201).send(JSON.stringify(provider))        
    } catch (error) {
        next(error)
    }

})

router.get('/:id', async (request, response, next) => {

    try {
        const id = request.params.id
        const providerFound = new Provider({id: id})
        await providerFound.load(id)
        response.send(JSON.stringify(providerFound))        
    } catch (error) {
        next(error)
    }

})

router.put('/:id', async (request, response, next) => {

    try {
        const id = request.params.id
        const dataRequest = request.body
        const data = Object.assign({}, dataRequest, {id: id})
        const providerFound = new Provider(data)
        await providerFound.update(id, data)
        response.send(JSON.stringify(providerFound))        
    } catch (error) {
        next(error)
    }

})

router.delete('/:id', async (request, response, next) => {

    try {
        const id = request.params.id
        const provider = new Provider({id: id})
        await provider.delete(id)
        response.status(204).send() 
    } catch (error) {
        next(error)
    }
})

module.exports = router