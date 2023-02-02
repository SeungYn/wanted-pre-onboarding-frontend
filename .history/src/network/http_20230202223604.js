import axios, { isAxiosError } from 'axios';

export class Http {
  #client;
  #tokenStorage;
  constructor(baseURL, tokenStorage) {
    this.#client = axios.create({
      baseURL,
      timeout: 3000,
    });
    this.#tokenStorage = tokenStorage;
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
      return res.data;
    } catch (e) {
      console.log(e);
      if (isAxiosError(e)) {
        const message = e.response.data?.message;
        if (e.response.status === 401) this.#tokenStorage.clearToken();
        if (message) throw new Error(message);
        console.log(1232123);
      }
      throw new Error('connection Error');
    }
  }
}
