import React from 'react'

import 'normalize.css/normalize.css';
import './Styles/styles.scss'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AddExpensepage from './components/Expense/AddExpensepage';
import EditExpensepage from './components/Expense/EditExpensepage';
import ExpenseDashboardpage from './components/Expense/ExpenseDashboardpage';
import NotFoundPage from './components/Expense/NotFoundPage';


const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ExpenseDashboardpage />} />
        <Route  path="/Edit" element={<EditExpensepage />} />
        <Route path="/Add" element={<AddExpensepage />} />
        <Route  path="*" element={<NotFoundPage/> }/>
      </Routes>
      </Router>
  )
}

export default App
