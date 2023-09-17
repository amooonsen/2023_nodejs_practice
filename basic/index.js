// about_common_js
const about_common_js = {
  run: () => {
    const checkNumber = require('./about_common_js/imported.js')
    console.log(checkNumber(5)) // 홀수
    console.log(checkNumber(2)) // 짝수
  }
}

// 공통 실행 함수

function runScript(obj) {
  return obj.run()
}

// 함수 실행 부분

// runScript(about_common_js) // 1
// runScript(about_common_js) // 2
// runScript(about_common_js) // 3
// runScript(about_common_js) // 4
// runScript(about_common_js) // 5

