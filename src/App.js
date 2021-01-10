import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

import Home from './components/pages/Home';
import CreateAccount from './components/pages/CreateAccount';
import AboutUs from './components/pages/AboutUs';
import Eggs from './components/pages/Eggs';
import FreshDrinks from './components/pages/FreshDrinks';
import Fruit from './components/pages/Fruit';
import Login from './components/pages/Login';
import Milk from './components/pages/Milk';
import Products from './components/pages/Products';
import Recipe from './components/pages/Recipe';
import VisitUs from './components/pages/VisitUs';
import Vegetables from './components/pages/Vegetables';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/eggs" exact component={Eggs} />
          <Route path="/fresh-drinks" exact component={FreshDrinks} />
          <Route path="/fruit" exact component={Fruit} />
          <Route path="/login" exact component={Login} />
          <Route path="/milk" exact component={Milk} />
          <Route path="/products" exact component={Products} />
          <Route path="/recipe" exact component={Recipe} />
          <Route path="/visit-us" exact component={VisitUs} />
          <Route path="/vegetable" exact component={Vegetables} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
