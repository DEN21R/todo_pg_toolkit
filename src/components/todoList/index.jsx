import { Card, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import TodoItem from '../todoItem'

function TodoList() {
  const todos = useSelector((state) => state.todo.data)

  return (
    <Card sx={{ mt: 4, minWidth: 275 }}>
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        Todo List
      </Typography>
      <ul>
        {todos.map((el) => (
          <TodoItem key={el.id} todo={el} />
        ))}
      </ul>
    </Card>
  )
}
export default TodoList
