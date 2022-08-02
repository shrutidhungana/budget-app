import React from 'react'

import 'normalize.css/normalize.css';
import './Styles/styles.scss'
import AppRouter from './Routes/AppRouter';
import configureStore from './Store/configureStore';
import { addExpense } from './Actions/expenses'
import { setTextFilter } from './Actions/filters'
import getVisibleExpenses from './Selectors/expenses'
import { Provider } from 'react-redux';
  
const App = () => {
  const store = configureStore();

 store.dispatch(addExpense({ description: 'Water bill', amount: 40500 }))
  store.dispatch(addExpense({ description: 'Gas bill', createdAt: 500 }))
  store.dispatch(addExpense({ description: 'Rent bill', amount: 109500 }))

  store.dispatch(setTextFilter('water'))

  setTimeout(() => {
    store.dispatch(setTextFilter('bill'))
  }, 4000)
 
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);

const jsx = (
    <Provider store = {store}>
      <AppRouter />
    </Provider>
    )
    return (
      <div>
        {jsx}
       </div>
    
    );
  }
  


export default App
