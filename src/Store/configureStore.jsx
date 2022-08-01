
import { createStore,combineReducers } from 'redux'
import expensesReducer from '../Reducers/expenses'
import filtersReducer from '../Reducers/filters'

const store = () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        })
    );

    return store;
};

export default store