import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboardpage = () => {
  return (
    <div>
      <ExpenseListFilters />
       <ExpenseList />
      </div>
  )
}

export default ExpenseDashboardpage