import React from 'react'
import { useState } from 'react'

import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom'

import Header from '../components/Header/Header'

import LoginView from './Login/LoginView'
import NewTaskView from './NewTask/NewTaskView'
import ParentTaskView from './ParentTask/ParentTaskView'
import SignupView from './Signup/SignupView'
import TaskListView from './TaskList/TaskListView'
import TestView from './Test/TestView'
import TopView from './Top/TopView'

type UserData = {
  token: string | undefined,
  username: string,
}

export const UserDataContext = React.createContext<UserData>({token: undefined, username: ''})

function Main() {
  const [userToken, setUserToken] = useState<string | undefined>(undefined)
  const [username, setUsername] = useState<string | undefined>(undefined)

  const onLogined = (userId: string, token: string) => {
    console.log('onLogined@Main')
    setUsername(userId)
    setUserToken(token)
  }

  return (
    <div>
      {/* <TestView /> */}
      <UserDataContext.Provider value={{token: undefined, username: ''}}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <TopView />
            </Route>

            <Route exact path="/signup" >
              <SignupView />
            </Route>

            <Route exact path="/login" >
              <LoginView onLogined={(username, token) => {onLogined(username, token)}} />
            </Route>

            <Route exact path="/list" >
              <TaskListView />
            </Route>            

            <Route exact path="/task/:id" >
              <ParentTaskView />
            </Route>
            
            <Route exact path="/new" >
              <NewTaskView />
            </Route>

            <Route exact path="/test" >
              <TestView />
            </Route>
            
            <Route render={() => <p>Page not found.</p>} />
          </Switch>
        </BrowserRouter>
      </UserDataContext.Provider>
      
    </div>
  )
}

export default Main
