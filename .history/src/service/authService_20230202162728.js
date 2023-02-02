export class AuthService {
  #http;

  constructor(http) {
    this.#http = http;
  }

  /**
   *
   * @param {{string, string}} {email, password}
   * @returns
   */
  async login({ email, password }) {
    return await this.#http.fetch('/auth/signin', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }
  
  /**
   *
   * @param {{string, string}} {email, password}
   * @returns
   */
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
