import React from 'react';

// react-router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// views
import LoginView from './Login/LoginView';
import SignupView from './Signup/SignupView';
import TaskListView from './TaskList/TaskListView';
import ParentTaskView from './ParentTask/ParentTaskView';
import NewTaskView from './NewTask/NewTaskView';

import TestView from './Test/TestView';

class Main extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <p>hello app</p>
        <TestView />

        <BrowserRouter>
          <Switch>
            <Route exact path="/signup" component={SignupView} />
            <Route exact path="/login" component={LoginView} />
            <Route exact path="/" component={TaskListView} />
            <Route exact path="/task" component={ParentTaskView} />
            <Route exact path="/new" component={NewTaskView}/>
            <Route render={() => <p>Page not found.</p>} />
          </Switch>
        </BrowserRouter>
        
      </div>
    )
  }
}

export default Main
