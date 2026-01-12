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
  },
})
export const { addTodo } = todoSlice.actions
export default todoSlice.reducer
