class Api {
  constructor(options) {
    // constructor body
    this._options = options;
  }

  getInitialCards() {
    // ...
    return fetch("https://around-api.en.tripleten-services.com/v1", {
      headers: {
        authorization: "10abc176-5f60-4222-bc96-a24c68a63c53", // auth Token
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // if the server returns an error, reject the promise
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  // other methods for working with the API
  getUserInfo() {
    // Method to get user info
  }

  getAppData() {
    // This would be your Promise.all method
    return Promise.all([this.getUserInfo(), this.getInitialCards]);
  }
}

// export the class
export default Api;
