import { Button, TextField } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import './update.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { updateTodo } from '../../slices/todoSlice'
import { PublicRoutes } from '../../routes/pages.routes'

const UpdateTodo = () => {
  const { id } = useParams()
  const stateTodo = useSelector((state) => state.todoSlice)
  const [newTodo, setNewTodo] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setNewTodo(e.target.value)
  }
  useEffect(() => {
    if (id) {
      setNewTodo(stateTodo.find((el) => el.id === id))
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateTodo({ newTodo, id }))
    navigate(PublicRoutes.HOME)
  }

  return (
    <main className='container-update'>
      <h2>Update TODO</h2>
      <form className='update-form' onSubmit={handleSubmit}>
        <TextField label='Update Todo' multiline rows={8} variant='filled' color='warning' name='newTodo' value={newTodo.todo} onChange={handleChange} />
        <Button type='submit' color='warning' variant='contained'>
          Update
        </Button>
      </form>
    </main>
  )
}

export default UpdateTodo
