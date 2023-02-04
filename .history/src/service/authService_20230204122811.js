export class AuthService {
  #http;

  constructor(http) {
    this.#http = http;
  }

  /**
   * 로그인
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
   * 회원가입
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
