import { Button, Divider, ListItem, ListItemText } from '@mui/material'

function TodoItem({ todo }) {
  return (
    <ListItem divider sx={{ pb: 2, pt: 2 }}>
      <ListItemText primary={todo.text} />
      <Button variant="contained" sx={{ fontWeight: 700 }}>
        Complete
      </Button>
      <Button variant="contained" color="error" sx={{ ml: 2, fontWeight: 700 }}>
        Delete
      </Button>
      <Divider />
    </ListItem>
  )
}
export default TodoItem
