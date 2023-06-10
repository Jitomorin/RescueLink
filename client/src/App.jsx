import React from 'react'
import { Provider } from 'react-redux';
import store from './app/Store/store';

import { Home } from './pages'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  )
}

export default App