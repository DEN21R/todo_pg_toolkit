import { Button, ListItem, ListItemText } from '@mui/material'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../../redux/slices/todoSlice'

function TodoItem({ todo }) {
  const dispatch = useDispatch()

  return (
    <ListItem divider sx={{ pb: 2, pt: 2 }}>
      <ListItemText primary={todo.text} />
      <Button variant="contained" sx={{ fontWeight: 700 }}>
        Complete
      </Button>
      <Button
        variant="contained"
        color="error"
        sx={{ ml: 2, fontWeight: 700 }}
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        Delete
      </Button>
    </ListItem>
  )
}
export default TodoItem
