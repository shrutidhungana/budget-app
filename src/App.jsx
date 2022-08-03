import React from 'react'

import 'normalize.css/normalize.css';
import './Styles/styles.scss'
import AppRouter from './Routes/AppRouter';
import configureStore from './Store/configureStore';
import { Provider } from 'react-redux';


const App = () => {
  const store = configureStore();

 
  

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
