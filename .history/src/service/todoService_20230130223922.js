class TodoService {
  #http;
  #tokenStorage;
  constructor(http, tokenStorage) {
    this.#http = http;
    this.#tokenStorage = tokenStorage;
  }

  async createTodo() {}

  async getTodos() {}
  async updateTodo() {}

  getAuthorizationHeader() {
    return {
      Authorization: `Bearer ${this.#tokenStorage.getToken()}`,
    };
  }
}
