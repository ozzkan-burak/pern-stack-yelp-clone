import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, UpdatePage, RestaurantDetailPage } from "./routes";

import "./App.css";
import { RestaurantsContextProvider } from './context/RestaurantContext';

const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/restaurants/:id/update" component={UpdatePage} />
            <Route exact path="/restaurants/:id" component={RestaurantDetailPage} />
          </Switch>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
};

export default App;