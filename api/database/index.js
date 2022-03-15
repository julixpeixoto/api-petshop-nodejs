const Sequelize = require('sequelize')
const config = require('config')
const instance = new Sequelize(
    config.get("postgres.database"),
    config.get('postgres.user'),
    config.get('postgres.password'),
    {
        host: config.get('api.host'),
        dialect: 'postgres',
        port: config.get('postgres.port')
    }
)

module.exports = instance