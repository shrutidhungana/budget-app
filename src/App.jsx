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

  store.dispatch(addExpense({ description: 'Water bill' }))
  store.dispatch(addExpense({description:'Gas bill'}))
  store.dispatch(setTextFilter('water'))

  setTimeout(() => {
    store.dispatch(setTextFilter('rent'))
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
