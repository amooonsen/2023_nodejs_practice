const url = require('url')
const { URL } = url
const myURL = new URL('https://github.com/amooonsen')
const urlFormat = url.format(myURL)

module.exports = { myURL, urlFormat }