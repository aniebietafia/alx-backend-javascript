export default class Airport {
  constructor(name, code) {
    // Instantiating Objects
    this._code = code;
    this._name = name;
  }

  // Methods

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
