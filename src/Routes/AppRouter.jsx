import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AddExpensepage from '../components/Expense/AddExpensepage'
import EditExpensepage from '../components/Expense/EditExpensepage'
import ExpenseDashboardpage from '../components/Expense/ExpenseDashboardpage'
import Header from '../components/Expense/Header'
import NotFoundPage from '../components/Expense/NotFoundPage'

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