import './todo.css'
import { PublicRoutes } from '../../routes/pages.routes'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Checkbox, Fab } from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { completedTodo, deleteTodo } from '../../slices/todoSlice'

const CardTodo = ({ id, completed, todo }) => {
  const dispatch = useDispatch()
  const actionDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  const actionCompleted = (id) => {
    dispatch(completedTodo(id))
  }
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
}

export default CardTodo
