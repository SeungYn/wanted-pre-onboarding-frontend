import axios from 'axios';

export class Http {
  #client;
  constructor(baseURL) {
    console.log('httpinstance');
    this.#client = axios.create({
      baseURL,
      timeout: 3000,
    });
  }

  async fetch(url, options) {
    const { headers, method, body } = options;
    const request = {
      url,
      method,
      headers: {
        ...headers,
        'Context-Type': 'application/json',
      },
      data: body,
    };

    const res = await this.#client(request);
    console.log(res);
  }
}
