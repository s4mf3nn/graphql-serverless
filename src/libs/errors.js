class HttpError extends Error {
  constructor({ code, info }) {
    console.log("ERROR", { code, info });

    super();
    this.message = {
      code,
      info,
    };
  }
}

module.exports = { HttpError };
