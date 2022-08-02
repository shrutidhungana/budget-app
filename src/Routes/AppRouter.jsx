import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AddExpensepage from '../components/AddExpensepage'
import EditExpensepage from '../components/EditExpensepage'
import ExpenseDashboardpage from '../components/ExpenseDashboardpage'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Header />
      <Switch>
        <Route exact path="/" component ={ExpenseDashboardpage } />
        <Route  path="/Edit/:id" component ={EditExpensepage} />
        <Route path="/Add" component = {AddExpensepage } />
        <Route   component ={NotFoundPage }/>
        </Switch>
        </div>
    </Router>
  )
}

export default AppRouter