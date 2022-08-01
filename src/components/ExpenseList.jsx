import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from '../components/ExpenseListItem';
import selectExpenses  from '../Selectors/expenses'

const ExpenseList = (props) => {
    return (
        <div>
            <h1>
                ExpenseList
            </h1>
            
            {props.expenses.map((expense) => {
                return (
                    <ExpenseListItem key = {expense.id} {...expense} />
                );
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters),
        
    };
};

    export default  connect(mapStateToProps)(ExpenseList)


