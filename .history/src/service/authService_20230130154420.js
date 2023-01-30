export class AuthService {
  #http;
  #tokenStorage;
  constructor(http, tokenStorage) {
    this.#http = http;
    this.#tokenStorage = tokenStorage;
  }

  async login('/auth/signup',{ email, password }) {
    console.log(email, password);
  }
}
