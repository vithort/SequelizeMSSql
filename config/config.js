require('dotenv').config({
    path: ".env"
});

module.exports = {
    dialect: process.env.DB_DIALECT
    , port: parseInt(process.env.DB_PORT)
    , host: process.env.DB_HOST
    , database: process.env.DB_DATABASE
    , username: process.env.DB_USERNAME
    , password: process.env.DB_PASSWORD
    , logging: false
    , pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}