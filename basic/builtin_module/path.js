const path = require('path')

const infoJoin = path.join(__dirname, '..', '/path.js')
const infoResolve = path.resolve(__dirname, '..', '/path.js')

// result
// infoJoin: '/Users/cho/Desktop/코딩/workspace/개인/연습/nodejs/2023_nodejs_practice/basic/path.js',
// infoResolve: '/path.js'
module.exports = { infoJoin, infoResolve }