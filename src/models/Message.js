export default class Message {
  constructor(obj) {
    this.result = obj?.result != null ? obj?.result : [];
    this.message = obj?.message != null ? obj?.message : "";
  }
}
