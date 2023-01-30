export class AuthService {
  #http;
  #tokenStorage;
  constructor(http, tokenStorage) {
    this.#http = http;
    this.#tokenStorage = tokenStorage;
  }

  async login({ email, password }) {
    return await this.#http.fetch('/auth/signin', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }

  async signup({ email, password }) {
    return await this.#http.fetch('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }
}
