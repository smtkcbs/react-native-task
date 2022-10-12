export default class Post {
  constructor(obj) {
    this.id = obj.id != null ? obj.id : generateUUID();
    this.url = obj.url != null ? obj.url : "";
    this.name = obj.name != null ? obj.name : "";
  }

  generateUUID() {
    let str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXZ";
    let uuid = [];
    for (let i = 0; i < 10; i++) {
      uuid.push(str[Math.floor(Math.random() * str.length)]);
    }
    return uuid.join("");
  }
}
