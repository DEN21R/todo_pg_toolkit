import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/slices/todoSlice'
import { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'

function TodoForm() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo(value))
    setValue('')
  }
  console.log(value)

  return (
    <Box component={'form'} onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        placeholder="Enter new todo"
        fullWidth
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        variant="contained"
        fullWidth
        type="submit"
        sx={{ backgroundColor: '#28a745', mt: 2, p: 2 }}
      >
        Add Todo
      </Button>
    </Box>
  )
}
export default TodoForm
