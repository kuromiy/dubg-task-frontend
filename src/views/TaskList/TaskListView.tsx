import { Button, TextField } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import React, { ReactNode, useContext } from 'react'
import { useEffect, useState } from 'react'
import api from '../../api'
import { UserDataContext } from '../Main'

const TaskListView = () => {
  const userData = useContext(UserDataContext)
  const [tasks, setTasks] = useState([])

  const [newTaskName, setNewTaskName] = useState('')

  useEffect(() => {
  }, [])

  const fetchTasks = () => {
  }

  const onClickedAdd = () => {
    api.post('/tasks', {taskName: newTaskName, userId: userData.username})
  }

  return (
    <div>
      <p>Task List</p>
      <div>
        <TextField placeholder={'New task name'} onChange={(elem)=>{setNewTaskName(elem.target.value)}} />
        <Button 
          startIcon={<Add />}
          variant={'contained'}
          style={{borderRadius: 9999}}
          onClick={onClickedAdd}
        >Add</Button>
        
        <div>
          {tasks.map<ReactNode>((task) => (
            <div><p>{task}</p></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TaskListView
