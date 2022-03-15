const Express = require('express');
const bodyParser = require('body-parser');
const config = require('config')
const router = require('./routes/provider/index.js')

app = Express()
app.use(bodyParser.json())
app.use('/api/providers', router)

app.listen(config.get('api.port'), () => console.log("App running!"))
