import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import DisplayCard from './components/DisplayCard';
import RandomBeer from './components/RandomBeer';
import BeerDetails from './components/BeerDetails';

import './App.css';

function App() {
  return (
    <main className="App ">
      <Header />
      <Switch>
        <Route exact path="/" component={DisplayCard} />
        <Route path="/random" component={RandomBeer} />
        <Route path="/beer/:id" component={BeerDetails} />
      </Switch>
    </main>
  );
}

export default App;
