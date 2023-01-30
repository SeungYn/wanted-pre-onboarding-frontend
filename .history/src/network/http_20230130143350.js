import axios from 'axios';

class Http {
  #axios;
  constructor(baseURL) {
    this.#axios = axios.create({
      baseURL,
      timeout: 3000,
    });
  }

  fetch(url, options) {
    const { headers, method, body } = options;
    const request = {
      url,
      method,
      headers: {
        ...headers,
      },
      data: body,
    };
  }
}
