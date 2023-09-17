// imported js
// CommonJS는 ESM과 달리, 최상단에 require를 선언해주지 않아도 된다.
const { odd, even } = require('./exported.js')

// 변수의 값이 홀수인지 짝수인지 판별하는 함수

function checkOddOrEven(num) {
  if(num % 2) {
    return odd
  } else {
    return even
  }
}

module.exports = checkOddOrEven