export class AuthService {
  #http;

  constructor(http) {
    this.#http = http;
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
