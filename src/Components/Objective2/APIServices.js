export default class APIServices {
  constructor() {
    this.error = false;
    this.results = {};
  }

  /* Get headers for the request */
  getHeaders() {
    let headers = {};
      headers = {
        Accept: "application/json",
        "content-type": "application/json",
        "user-key": '4134167c7e3629c22267a061834a5441'
      };
    return headers;
  }

  /* Checking for errors if any */
  checkErrors() {
    this.error = true;
    switch (this.status) {
      case 404:
        this.results = {
          message: "Results not found."
        };
        break;
      default:
        this.results = {
          message: "Something went wrong"
        };
    }
  }

  /* GET method call with fetch */
  async get(url) {
    await fetch(url, {
      method: "GET",
      headers: this.getHeaders()
    })
      .then(response => {
        this.status = response.status;
        return response.json();
      })
      .then(jsonResponse => {
        this.results = jsonResponse;
      })
      .catch(e => {
        console.log(e);
      });
    if (this.status !== 200) {
      this.error = true;
      this.checkErrors();
    }
    return {
      error: this.error,
      results: this.results,
      status: this.status
    };
  }
}


