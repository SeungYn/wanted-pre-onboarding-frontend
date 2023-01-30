export class AuthService {
  #http;
  #tokenStorage;
  constructor(http, tokenStorage) {
    this.#http = http;
    this.#tokenStorage = tokenStorage;
  }

  async login(url, { email, password }) {
    console.log(email, password);

    return await this.#http.fetch(url, {
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }
}
