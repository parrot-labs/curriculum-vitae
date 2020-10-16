import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import routes from './config/route';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
    <Navbar/>
    <div className="App">
      <Switch>
        {routes.map((route) => {
            return (
              <Route
                path={route.path}
                component={route.component}
                key={route.path}
              />
            );
          })}
      </Switch>
      </div>
    </Router>
  );
};

export default App;