
import { createStore,combineReducers } from 'redux'
import expensesReducer from '../Reducers/expenses'
import filtersReducer from '../Reducers/filters'

const store = () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};

export default store