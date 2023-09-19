// ScriptRunner 클래스 정의
class ScriptRunner {
  constructor(root) {
    this.root = root;
  }

  run(file) {
    const result = require(`${this.root}/${file ? file + '.js' : 'imported.js'}`);
    console.log(result);
  }
}

// 객체 인스턴스 생성
const about_commonjs = new ScriptRunner('./about_commonjs');
const builtin_module = new ScriptRunner('./builtin_module');
const crypto = new ScriptRunner('./crypto');

/**
 * 주어진 ScriptRunner 객체를 실행
 * @param {ScriptRunner} obj - ScriptRunner 객체.
 * @param {string} [pathName] - 실행할 파일의 이름. about_commonjs의 경우 무시
 */
function runScript(obj, pathName = null) {
  obj.run(pathName);
}

// 함수 실행 부분
// runScript(about_commonjs);
runScript(builtin_module, 'util');
// runScript(crypto, 'crypto');
