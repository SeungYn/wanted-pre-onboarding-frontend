export default class TodoService {
  #http;
  #tokenStorage;
  constructor(http, tokenStorage) {
    this.#http = http;
    this.#tokenStorage = tokenStorage;
  }

  /**
   * 만들기
   * @param {string} todo
   * @returns {Promise<todo>}
   */
  async createTodo(todo) {
    return await this.#http.fetch('/todos', {
      method: 'POST',
      headers: this.getAuthorizationHeader(),
      body: JSON.stringify({ todo }),
    });
  }

  /**
   * 전체 투두 가져오기
   * @returns {Promise<todos>}
   */
  async getTodos() {
    return await this.#http.fetch('/todos', {
      method: 'GET',
      headers: this.getAuthorizationHeader(),
    });
  }

  /**
   * 수정하기
   * @param {number} id
   * @param {string} todo
   * @param {boolean} isCompleted
   * @returns {Promise<todos>}
   */
  async updateTodo(id, todo, isCompleted) {
    return await this.#http.fetch(`/todos/${id}`, {
      method: 'PUT',
      headers: this.getAuthorizationHeader(),
      body: JSON.stringify({ todo, isCompleted }),
    });
  }

  /**
   * 삭제하기
   * @param {number} id 
   * @returns 
   */
  async deleteTodo(id) {
    return await this.#http.fetch(`/todos/${id}`, {
      method: 'DELETE',
      headers: this.getAuthorizationHeader(),
    });
  }

  getAuthorizationHeader() {
    return {
      Authorization: `Bearer ${this.#tokenStorage.getToken()}`,
    };
  }
}
