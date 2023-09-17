// CommonJS case
// success case

// const foo = false
// foo && require('./someting')

// ES Module
// error case

// const foo = false
// if(foo) {
//   import './exported.mjs'
// }

// success case
const bar = true
if (bar) {
  const module01 = await import('./exported.mjs')
  const module02 = await import('./imported.mjs')
  console.log(module01) // { odd: '홀수', even: '짝수' }
  console.log(module02) // { default: [Function: checkOddEven] }
}

