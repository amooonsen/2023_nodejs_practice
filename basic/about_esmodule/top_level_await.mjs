// top level await

// 일반적인 자바스크립트 코드
// 함수 선언시 async 키워드를 명시해야 내부 블럭에서 await을 사용할 수 있다.

const testFunction = async () => {
  const result = await api()
}

// top level await
// 즉각적으로 await 키워드를 사용 할 수 있다.
await api()