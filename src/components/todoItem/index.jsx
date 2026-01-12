import { Button } from '@mui/material'

function TodoItem({ todo }) {
  return (
    <li>
      {todo.text}
      <Button variant="contained">Complete</Button>
      <Button variant="contained" color="error">
        Delete
      </Button>
    </li>
  )
}
export default TodoItem
