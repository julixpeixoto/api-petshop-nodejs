const Express = require('express');
const bodyParser = require('body-parser');
const config = require('config')
const router = require('./routes/provider/index.js');
const ProviderNotFoundException = require('./exception/ProviderNotFoundException.js');

app = Express()
app.use(bodyParser.json())
app.use('/api/providers', router)
app.use((error, request, response, next) => {
    if (error instanceof ProviderNotFoundException) {
        response.status(404)
    } else {
        response.status(400)
    }  

    response.send(JSON.stringify({ 
        message: error.message
    }))
})

app.listen(config.get('api.port'), () => console.log("App running!"))
