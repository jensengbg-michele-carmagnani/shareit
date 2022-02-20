class HttpError extends Error {
  constructor(message, errorCode) {
    super(message); // add a "message" property to the constructor
    this.code = errorCode; // add a 'code' property
  }
}
module.exports = HttpError;
