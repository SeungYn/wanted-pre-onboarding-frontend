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
        'Content-Type': 'application/json',
      },
      data: body,
    };

    try {
      const res = await this.#client(request);
      console.log(res);
      return res.data;
    } catch (e) {
      console.log(e);
      if (e.response) {
        const message = e.response.data?.message;
        if (message) throw new Error(message);
      }
      throw new Error('connection Error');
    }
  }
}
