import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AddExpensepage from '../Expense/AddExpensepage'
import EditExpensepage from '../Expense/EditExpensepage'
import ExpenseDashboardpage from '../Expense/ExpenseDashboardpage'
import Header from '../Expense/Header'
import NotFoundPage from '../Expense/NotFoundPage'

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Header />
      <Routes>
        <Route exact path="/" element={<ExpenseDashboardpage />} />
        <Route  path="/Edit" element={<EditExpensepage />} />
        <Route path="/Add" element={<AddExpensepage />} />
        <Route  path="*" element={<NotFoundPage/> }/>
        </Routes>
        </div>
    </Router>
  )
}

export default AppRouter