import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary'

const ExpenseDashboardpage = () => {
  return (
    <div>
      
      <ExpensesSummary />
      <ExpenseListFilters />
       <ExpenseList />
      </div>
  )
}

export default ExpenseDashboardpage