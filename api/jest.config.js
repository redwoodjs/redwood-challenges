const { getConfig } = require('@redwoodjs/core')

const config = getConfig({ type: 'jest', target: 'node' })
config.displayName.name = 'api'
config.testPathIgnorePatterns = ['/node_modules/', '__fixtures__']
module.exports = config
