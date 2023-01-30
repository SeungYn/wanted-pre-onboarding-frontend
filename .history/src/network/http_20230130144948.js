import axios from 'axios';

export class Http {
	console.log('httpinstance');
  #client;
  constructor(baseURL) {
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
      },
      data: body,
    };

    const res = await this.#client(request);
    console.log(res);
  }
}
