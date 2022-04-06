export default class CommonTools {
  static deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj))
  }
}
