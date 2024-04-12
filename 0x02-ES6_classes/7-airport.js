export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string' || typeof code !== 'string') {
      throw new TypeError('Name and code must be strings');
    }
    this.name = name;
    this.code = code;
  }

  toString() {
    return `[object ${this.code}]`;
  }
}
