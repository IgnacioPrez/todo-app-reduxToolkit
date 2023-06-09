import { useDispatch } from 'react-redux'
import { addTodo } from '../../slices/todoSlice'
import { v4 as uuid } from 'uuid'
import { Button, TextField } from '@mui/material'
import './form.css'
import { Toaster, toast } from 'react-hot-toast'
const AddToTask = () => {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    const { todo } = Object.fromEntries(new window.FormData(e.target))

    e.preventDefault()
    if (todo === '') {
      return toast.error('It is not possible to add an empty note')
    }
    dispatch(
      addTodo({
        todo,
        id: uuid(),
        completed: false
      })
    )
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField color='primary' label='Add your todo' variant='standard' name='todo' />
      <Button variant='contained' color='primary' type='submit'>
        ADD
      </Button>
      <Toaster position='top-center' reverseOrder={false} />
    </form>
  )
}

export default AddToTask
