import React from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import AddExpensepage from '../Components/AddExpensepage'
import EditExpensepage from '../Components/EditExpensepage'
import ExpenseDashboardpage from '../Components/ExpenseDashboardpage'
import NotFoundPage from '../Components/NotFoundPage'
import Header from '../Components/Header'

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Header />
      <Switch>
        <Route exact path="/" component ={ExpenseDashboardpage } />
        <Route  path="/Edit/:id" component = {EditExpensepage } />
          <Route path="/Add" component={AddExpensepage} />
          
        <Route   component ={NotFoundPage }/>
        </Switch>
        </div>
    </Router>
  )
}

export default AppRouter