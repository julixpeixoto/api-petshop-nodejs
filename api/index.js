const Express = require('express');
const bodyParser = require('body-parser');
const config = require('config')
const router = require('./routes/provider/index.js');
const ProviderNotFoundException = require('./exception/ProviderNotFoundException.js');
const NotAcceptTypeException = require('./exception/NotAcceptTypeException')
const acceptTypes = require('./Serializer').acceptTypes

app = Express()
app.use(bodyParser.json())

app.use((request, response, next) => {
    let requestType = request.header('Accept')

    if(requestType === '*/*') requestType = 'application/json'

    if(acceptTypes.indexOf(requestType) === -1) {
        response.status(406)
        return response.end()
    }

    response.setHeader('Content-Type', requestType)
    next()
})

app.use('/api/providers', router)

app.use((error, request, response, next) => {
    if (error instanceof ProviderNotFoundException) {
        response.status(404)
    } else if (error instanceof NotAcceptTypeException){
        response.status(406)
    } else {
        response.status(400)
    }  

    response.send(JSON.stringify({ 
        message: error.message
    }))
})

app.listen(config.get('api.port'), () => console.log("App running!"))
