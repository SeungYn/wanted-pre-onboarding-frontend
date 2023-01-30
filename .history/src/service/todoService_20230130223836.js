class TodoService {
  #http;
  #tokenStorage;
  constructor(http, tokenStorage) {
    this.#http = http;
    this.#tokenStorage = tokenStorage;
  }

  getAuthorizationHeader() {
    return {
      Authorization: `Bearer ${this.#tokenStorage.getToken()}`,
    };
  }
}
