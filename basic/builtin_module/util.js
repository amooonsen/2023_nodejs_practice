const util = require('util')
const crypto = require('crypto')

const doNotUseMe = util.deprecate((a, b) => {
  console.log(a + b)
}, '해당 함수는 deprecated 되었으니 더 이상 사용하지 마세요.')

doNotUseMe(2,3)

const randomBytesPromise = util.promisify(crypto.randomBytes)
randomBytesPromise(64)
  .then((buf) => console.log(buf.toString('base64')))
  .catch((error) => console.log(error))
  
module.exports = {
  doNotUseMe,
  randomBytesPromise
}