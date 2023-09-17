// CommonJS 에서의 this 동작

function findThisDeclarations() {
  console.log(this)
}

const findThisScopeExpressions = function () {
  console.log(this)
}

const findThisScope = () => {
  console.log(this)
}

console.log(this) 
findThisDeclarations()
findThisScopeExpressions()
findThisScope()

// result
// console.log(this) === {}
// findThisDeclarations() === global: Object
// findThisScopeExpressions() === global: Object
// findThisScope() === {}