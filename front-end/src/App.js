import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Redirect from './Pages/Redirect';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Products from './Pages/Products';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Redirect } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/products" component={ Products } />
    </Switch>
  );
}

export default App;
