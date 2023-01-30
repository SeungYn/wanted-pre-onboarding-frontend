class TodoService {
  #http;
  #tokenStorage;
  constructor(http, tokenStorage) {
    this.#http = http;
    this.#tokenStorage = tokenStorage;
  }

  async createTodo(todo) {
    return await this.#http.fetch('/todos', {
      method: 'POST',
      headers: this.getAuthorizationHeader(),
      body: JSON.stringify({ todo }),
    });
  }

  async getTodos() {
    return await this.#http.fetch('/todos', {
      method: 'GET',
      headers: this.getAuthorizationHeader(),
    });
  }
  async updateTodo(id, todo, isCompleted) {
    return await this.#http.fetch(`/todos/${id}`, {
      method: 'POST',
      headers: this.getAuthorizationHeader(),
      body: JSON.stringify({ todo, isCompleted }),
    });
  }

  async deleteTodo() {}

  getAuthorizationHeader() {
    return {
      Authorization: `Bearer ${this.#tokenStorage.getToken()}`,
    };
  }
}
