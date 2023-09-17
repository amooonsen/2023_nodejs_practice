// about_commonjs
const about_commonjs = {
  run: () => {
    const checkNumber = require('./about_commonjs/imported.js')
    console.log(checkNumber(5)) // 홀수
    console.log(checkNumber(2)) // 짝수
  }
}

const builtin_module = {
  run: () => {
    
  }
}

// 공통 실행 함수

function runScript(obj) {
  return obj.run()
}

// 함수 실행 부분

// runScript(about_commonjs) // 1
// runScript(about_commonjs) // 2
// runScript(about_commonjs) // 3
// runScript(about_commonjs) // 4
// runScript(about_commonjs) // 5

