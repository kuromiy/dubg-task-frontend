import React, { ReactNode, useContext } from 'react'
import { useEffect, useState } from 'react'

import { Button, CircularProgress, TextField } from '@material-ui/core'
import { Add } from '@material-ui/icons'

import CircleDot from '../../components/CircleDot'

import Style from './TaskListView.module.scss'

import api from '../../api'
import { UserDataContext } from '../Main'
import ApiUrl from '../../api/apiurl'
import { Task } from '../../types/AppTypes'
import Colors from '../../consts/Colors'

const TaskListView = () => {
  const userData = useContext(UserDataContext)
  const [tasks, setTasks] = useState<Task[] | undefined>(undefined)

  const [newTaskName, setNewTaskName] = useState('')

  const [loadingTaskList, setLoadingTaskList] = useState<boolean>(false)

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    setLoadingTaskList(true)
    const res = await api.get('/tasks/search', {params: {
      taskStatusId: '001',
      limit: 10, 
      offset: 0
    }})
    const resTasks: Task[] = res.data._taskResources
    setTasks(resTasks)
    setLoadingTaskList(false)
    console.log(tasks)
  }

  const onClickedAdd = async () => {
    const res = await api.post('/tasks', {
      taskName: newTaskName, 
      userId: userData.username,
      taskStatusId: '002',
      childTaskNames: []
    })
    fetchTasks()
    console.log('response: ', res)
  }

  return (
    <div className={Style['task-list-view']}>
      <h1>Task List</h1>
      <div>
        <TextField placeholder={'New task name'} onChange={(elem)=>{setNewTaskName(elem.target.value)}} />
        <Button 
          startIcon={<Add />}
          variant={'contained'}
          style={{borderRadius: 9999}}
          onClick={onClickedAdd}
        >Add</Button>
        
        <div>
          {tasks === undefined ? (
            <CircularProgress size={24} />
          ) : (
            tasks.map((task, index) => (
              <div key={index}>
                <TaskListItem task={task} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

const TaskListItem = (props: {task: Task}) => {
  const circleColor = (()=>{
    switch (props.task.taskStatus?.taskStatusId){
      case '001': return Colors.task.new
      default: return Colors.disabledGray
    }
  })()
  return (
    <div className={Style['task-list-item']}>
      <div>
        <CircleDot size={8} color={circleColor} />
      </div>
      <div>
        <span>{props.task.taskName}</span>
      </div>
    </div>
  )
}

export default TaskListView
