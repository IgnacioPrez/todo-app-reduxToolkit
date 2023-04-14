export const saveToLocalStorage = (todoState) => window.localStorage.setItem('todo', JSON.stringify(todoState))
