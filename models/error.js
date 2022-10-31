// Template class to generate errors from error

class Error {
  constructor(value, msg, param, location) {
    this.value = value, 
    this.msg = msg, 
    this.param = param, 
    this.location = location
  }
};

class Errors extends Error {

  constructor() {
    this._errorList = {};
  }

  static get showErrorList() {
    const errorObject = JSON.stringify(this._errorList);
    const errors = JSON.parse(errorObject);
    // REMEMBER: use => {errors} to have {"errors"[{}, {}]}
    return errors
  }

  // You can pass one or more errors
  static createErrors(first, ...rest) {
    let fullInstance = [];
    rest.push(first);
    const errors = JSON.stringify(rest);
    fullInstance = JSON.parse(errors);
    return this._errorList = fullInstance;
  }
};

module.exports = {
  Error,
  Errors
};

