// os는 운영체제의 정보를 가지고 있다. 
// uptime, hostname(컴퓨터의 이름), 디렉토리 경로, platform 다양한 프로퍼티를 추출할 수 있다.

// 다른 것 보다 중요한 녀석이 하나 있는데, **os.cpus()** 이다.
// cpu의 코어를 가져올 수 있는 속성이다.(사용자의 환경마다 다르기 때문이다)
const os = require('os')

module.exports = { os }