import axios from 'axios';

class Http {
  #axios;
  constructor(baseURL) {
    this.#axios = axios.create({
      baseURL,
      timeout: 3000,
    });
  }
}
