import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem';
import selectExpenses  from '../Selectors/expenses'

const ExpenseList = (props) => {
    return (
        <div>
            <div className="content-container">
            <div className="list-header">
            <h1>
                ExpenseList
                    </h1>
                    </div>
                <div className="list-body">
            {props.expenses.map((expense) => {
                return (
                    <ExpenseListItem key = {expense.id} {...expense} />
                );
            })}
            </div>  
            </div>
            </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters),
        
    };
};

    export default  connect(mapStateToProps)(ExpenseList)


