import { useSelector } from 'react-redux'
import './task.css'
import { CardTodo } from '../card-todo'

const Tasks = () => {
  const todoState = useSelector((state) => state.todoSlice)

  return (
    <div className='main-container'>
      <div className='todo-container'>
        {todoState.map((todo) => <CardTodo key={todo.id} {...todo} />)}
      </div>
    </div>
  )
}

export default Tasks
