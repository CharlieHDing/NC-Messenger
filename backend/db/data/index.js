const ENV = process.env.NODE_ENV || 'development'
const devData = require('./development-data/users')
const testData = require('./test-data/users')

const data = {
    test: testData,
    development: devData,
    production: devData
}

module.exports = data[ENV]