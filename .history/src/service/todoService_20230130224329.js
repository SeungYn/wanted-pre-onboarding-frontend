class TodoService {
  #http;
  #tokenStorage;
  constructor(http, tokenStorage) {
    this.#http = http;
    this.#tokenStorage = tokenStorage;
  }

  async createTodo(todo) {
    return await this.#http.fetch('/todos', {
      headers: this.getAuthorizationHeader(),
      body: JSON.stringify({ todo }),
    });
  }

  async getTodos() {}
  async updateTodo() {}

  async deleteTodo() {}

  getAuthorizationHeader() {
    return {
      Authorization: `Bearer ${this.#tokenStorage.getToken()}`,
    };
  }
}
