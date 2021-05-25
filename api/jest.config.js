const dotenv = require('dotenv-defaults')
const { getConfig } = require('@redwoodjs/core')

dotenv.config({ defaults: '../env.defaults' })
process.env.DATABASE_URL = process.env.TEST_DATABASE_URL

const config = getConfig({ type: 'jest', target: 'node' })
config.displayName.name = 'api'
config.testPathIgnorePatterns = ['/node_modules/', '__fixtures__']
module.exports = config
