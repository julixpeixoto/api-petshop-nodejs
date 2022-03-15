const ModelProviders = require('../routes/provider/ModelProviders')

ModelProviders
    .sync()
    .then(() => 'Table provider created')
    .catch(console.log)