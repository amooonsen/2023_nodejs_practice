// about_commonjs
const about_commonjs = {
  root: './about_commonjs',
  run() {
    const checkNumber = require(`${this.root}/imported.js`)
    console.log(checkNumber(5)) // 홀수
    console.log(checkNumber(2)) // 짝수
  }
}

const builtin_module = {
  root: './builtin_module',
  run(file) {
    const result = require(`${this.root}/${file}.js`)
    console.log(result)
  }
}

// 공통 실행 함수

function runScript(obj, pathName = null) {
  return obj.run(pathName)
}

// 함수 실행 부분

/**
 * @param {obj} about_commonjs
 * @example runScript(about_commonjs)

// runScript(about_commonjs)

/**
 * @param {obj} builtin_module
 * @param {string} 파일명
 * @example runScript(builtin_module, path)
 */

runScript(builtin_module, 'path')


