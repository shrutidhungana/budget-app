import React from 'react'
import { Link } from 'react-router-dom'
import { removeExpense } from '../Actions/expenses'
import { connect } from 'react-redux'

const ExpenseListItem = ({dispatch,id,description, amount, createdAt}) => {

  return (
    <div>
      <Link to = {`/edit/${id}`}>
      <h3>
      {description}  
      </h3>
      </Link>
         
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