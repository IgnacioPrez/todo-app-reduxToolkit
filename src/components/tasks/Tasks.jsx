import { useDispatch, useSelector } from 'react-redux'
import './task.css'
import { Checkbox, Fab } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { completedTodo, deleteTodo } from '../../slices/todoSlice'
import { Link } from 'react-router-dom'
import { PublicRoutes } from '../../routes/pages.routes'

const Tasks = () => {
  const todoState = useSelector((state) => state.todoSlice)
  const dispatch = useDispatch()
  const actionDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  const actionCompleted = (id) => {
    dispatch(completedTodo(id))
  }
  return (
    <div className='main-container'>
      <div className='todo-container'>
        {todoState.map(({ id, todo, completed }) => {
          return (
            <div key={id} className='todo'>
              <div className='todo-info'>
                <Checkbox onClick={() => actionCompleted(id)} />
                <div className='todo-info-cont'>
                  <p className={`${completed ? 'checked' : 'unchecked'}`}>{todo}</p>
                </div>
              </div>
              <div className='todo-icons'>
                <Link to={`${PublicRoutes.UPDATE}/${id}`}>
                  <Fab color='success' aria-label='edit' size='small'>
                    <EditIcon />
                  </Fab>
                </Link>
                <Fab color='error' aria-label='edit' size='small' onClick={() => actionDelete(id)}>
                  <DeleteIcon />
                </Fab>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tasks
