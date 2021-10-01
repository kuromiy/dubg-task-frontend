export class Task {
  taskId: number | undefined
  taskName: string | undefined
  taskStatus: {
    taskStatusId: string
    taskStatusName: string
  } | undefined
  created_at: string | undefined
  updated_at: string | undefined

  statusText = () => {
    if (this.taskStatus === undefined){
      return 'undefined'
    }
    switch(this.taskStatus.taskStatusId){
      case '001': return '新規'
    }
  }
}