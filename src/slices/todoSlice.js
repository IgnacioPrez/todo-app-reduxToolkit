import { createSlice } from '@reduxjs/toolkit'
import { saveToLocalStorage } from '../utilities/localStorage.function'

const initialState = JSON.parse(window.localStorage.getItem('todo')) || [
  { id: 1, todo: 'Escriba su todo mi raaay', completed: false }
]

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (action.payload.todo === '') return
      const newState = [...state, action.payload]
      const foundTodo = state.find((el) => el.todo === action.payload.todo)
      if (foundTodo) return
      saveToLocalStorage(newState)
      return newState
    },
    deleteTodo: (state, action) => {
      const todoFound = state.filter((el) => el.id !== action.payload)
      saveToLocalStorage(todoFound)
      return todoFound
    },
    updateTodo: (state, action) => {
      const { newTodo, id } = action.payload
      const foundTodo = state.find((el) => el.id === id)
      if (foundTodo) {
        foundTodo.todo = newTodo
      }
    },
    completedTodo: (state, action) => {
      const foundOftheCompleted = state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
      return foundOftheCompleted
    }
  }
})

export const { addTodo, deleteTodo, updateTodo, completedTodo } = todoSlice.actions

export default todoSlice.reducer
