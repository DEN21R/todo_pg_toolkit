import { Box, Card, List, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import TodoItem from '../todoItem'

function TodoList() {
  const todos = useSelector((state) => state.todo.data)

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ mt: 4, width: 800, backgroundColor: '#f9f9f9', p: 4 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 700 }}>
          Todo List
        </Typography>
        <List>
          {todos.map((el) => (
            <TodoItem key={el.id} todo={el} />
          ))}
        </List>
      </Card>
    </Box>
  )
}
export default TodoList
