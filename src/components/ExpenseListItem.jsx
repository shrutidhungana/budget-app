import React from 'react'
import { removeExpense } from '../Actions/expenses'
import { connect } from 'react-redux'

const ExpenseListItem = ({dispatch,id,description, amount, createdAt}) => {

  return (
      <div>
          <h3>
            {description}  
          </h3>
          <p>
        {amount}-{createdAt}
        <button
          onClick={() => {
            dispatch(removeExpense({ id }));
          }}
        >
           Remove
        </button>
          </p>
      </div>
  )
}


export default connect()(ExpenseListItem)