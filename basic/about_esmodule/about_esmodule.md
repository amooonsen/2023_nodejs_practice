# ECMAScript Module

## Intro

현재 node.js에서 ES Module의 기능을 전부 활용하긴 어렵지만, 
장기적으로는 CommonJS가 표준이 된 ESModule로 전환이 될 것 이다.
ESModule을 사용하는 node libary들이 있으니, 알아두도록 하자.(이미 프론트 개발시에는 적극 활용 중 이지만..ㅎㅎ)

---

아래는 이전 포스트에서 CommonJS 방식으로 작성한 코드를 ES Module로 컨버팅한 코드다.

```jsx
// exported.mjs
export const odd = 'is odd'
export const even = 'is even'
```

```jsx
// imported.mjs
import { odd, even } from './exported.mjs'

const checkOddEven = () => {
  // ...code
}

/**
 * default export
 * export.defaults와 같다.
 * 세부 로직은 앞선 CommonJS Module과 같으므로 생략한다. 
 */

export default checkOddEven
```

node에서의 ES Module은 확장자로 .mjs를 사용한다. mjs 확장자 대신에 js 확장자를 사용하려면
package.json에 type: “module” 속성을 넣어주어야 한다. (확장자 생략 불가능)

## Dynamic import

CommonJS 모듈에서는 dynamic import, 즉 동적 불러오기가 가능하다. 
아래는 dyanmic import에 관한 간단한 실행문이다.

```jsx
// CommonJS
const foo = false
foo && require('./someting')

console.log('success') // 콘솔 찍힘
```

```jsx
// ES Module
const foo = false
if(foo) {
  import './exported.mjs' // 가져오기 선언은 모듈의 최상위 수준에서만 사용 할 수 있습니다.
}

console.log('success') // SyntaxError 발생(Unexpected string)
```

그렇다면 ES Module에서는 dyanmic import가 불가능할까? 
엄밀히 말하면 if문(local scope)에서 import 하는 것이 불가능하다. 
이는 또 다른 문법을 사용하여 dynamic import를 가능하게 할 수 있다.

```jsx
const bar = true
if (bar) {
  const module01 = await import('./exported.mjs')
  const module02 = await import('./imported.mjs')
  console.log(module01) // { odd: '홀수', even: '짝수' }
  console.log(module02) // { default: [Function: checkOddEven] }
}
```

import 함수를 사용하면, 모듈을 동적으로 불러올 수 있다.
주의해야할 점은 import는 Promise를 반환하기 때문에, awiat이나 then을 붙여줘야 한다.
위의 코드에서는 async 함수를 사용하지 않았는데, ES Module의 최상위 스코프에서는 async 없이 await을 사용할 수 있다. **CommonJS Module**에서는 async 없이 await을 사용하는 건 불가능하다.
이는 하단의 **Top level await**에 좀 더 자세히 설명해두었다. 

### Top level await

ES Module 파일에서는 최상위 한정으로 await 키워드를 사용할 수 있다.

```jsx
// 일반적인 자바스크립트 코드
// 함수 선언시 async 키워드를 명시해야 내부 블럭에서 await을 사용할 수 있다.

import { api } from '@/api/commonAxios.js'

const testFunction = async () => {
 const result = await api()
}

// top level await
// 즉각적으로 await 키워드를 사용 할 수 있다.
await api()
```

### __filename, __dirname 대신에 무엇을 써야하나?

ES Module에서는 __filename과 __dirname 등을 사용할 수 없다.(require, module.exports 포함)
그러나 환경변수(env)에서 **import.meta.url** 을 사용해 개조하여 디렉토리 네임을 추출 할 수 있다.

__filename과 __dirname의 자세한 내용은 해당 글에 정리해두었다.
링크: 

그 외 CommonJS와 ES Module은 서로 간의 호출이 가능하지만, 호환이 되지 않는 케이스가 종종 있음으로 
한 가지 형식만 사용하는 것을 권장한다. 실제로 다른 사이드 프로젝트에서 두 모듈간의 호환성을 테스트 해봤는데, 디버깅이 매우 어려웠던 경험이 있다. 간단히 요약하자면 require에 접근하여 cache를 뜯어보고 마개조(?)를 한 뒤에 문제 원인을 파악하였다. 이 건 어느정도 기본 히스토리가 정리되면 후에 회고 해봐야겠다.

---

### Summary

현재 node.js에서 ES Module의 기능을 전부 활용하는 것은 어렵지만, 장기적으로는 CommonJS가 표준이 된 ESModule로 전환될 것이다. 이미 프론트 개발 시에는 ESModule을 적극적으로 활용하고 있으니, ESModule을 사용하는 node libary들을 알아두는 것이 좋다. 

단, 확장자로 .mjs를 사용하는데, js 확장자를 사용하려면 package.json에 type: "module" 속성을 추가해야 한다. 

dynamic import는 CommonJS 모듈에서는 가능하지만, ES Module에서는 if문(local scope)에서 import 하는 것이 불가능하다. 하지만 import 함수를 사용하여 모듈을 동적으로 불러올 수 있다. import는 Promise를 반환하기 때문에, await이나 then을 사용해야 하며, ES Module의 최상위 스코프에서는 async 없이 await을 사용할 수 있다. 

__filename과 __dirname은 ES Module에서 사용할 수 없지만, import.meta.url을 사용하여 디렉토리 네임을 추출할 수 있다. CommonJS와 ES Module은 서로 호환되지만, 혼용하는 것은 권장되지 않는다.

**Original creation date**: 2023-02-15

**Last modified**: 2023-09-17 

**Author**: 조경문

**Verison**: 0.2

### 마치며

(해당 부분은 노션 API를 활용해 따로 깃에 업로드 되지 않게 하도록 연구중)

### 참고 자료

1. https://nodejs.org/api/modules.html
2. https://developer.mozilla.org/ko/docs/Web/JavaScript
3. https://www.freecodecamp.org/news/modules-in-javascript/
4. https://www.daleseo.com/js-module-require/
5. https://www.zerocho.com/ (조현영 님)
6. [chat.openai.com](http://chat.openai.com/)
7. notion API