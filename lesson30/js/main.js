import { getTodosFromLocalStorage } from "./storage.js"
import { renderTodos, initodoHandlers } from "./dom.js"

const todos = getTodosFromLocalStorage() || [];

document.addEventListener("DOMContentLoaded", () => {
  renderTodos(todos)
  initodoHandlers(todos)
})
