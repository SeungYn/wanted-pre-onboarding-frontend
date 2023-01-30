export class AuthService {
  #http;
  #tokenStorage;
  constructor(http, tokenStorage) {
    this.#http = http;
    this.#tokenStorage = tokenStorage;
  }

  async login({ email, password }) {
    console.log(email, password);

    return await this.#http.fetch('/auth/signi', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }
}
