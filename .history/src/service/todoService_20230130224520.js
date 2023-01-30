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

  async getTodos(id, todo, isCompleted) {
    return await this.#http.fetch(`/todos/${id}`, {
      method: 'GET',
      method: 'POST',
      headers: this.getAuthorizationHeader(),
      body: JSON.stringify({ todo, isCompleted }),
    });
  }
  async updateTodo() {}

  async deleteTodo() {}

  getAuthorizationHeader() {
    return {
      Authorization: `Bearer ${this.#tokenStorage.getToken()}`,
    };
  }
}
