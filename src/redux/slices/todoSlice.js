import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    data: [],
  },
  reducers: {
    addTodo(state, action) {
      state.data.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      })
    },
    removeTodo(state, action) {
      state.data = state.data.filter((el) => el.id !== action.payload)
    },
  },
})
export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer
