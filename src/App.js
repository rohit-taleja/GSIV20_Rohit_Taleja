import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import MoviesList from './screen/movieHome/component/moviesList';
import MovieDetails from './screen/movieDetails/component/movieDetails';
function App() {
  return (
    <div className="App">
    <Switch>
    <Route path="/" exact component={MoviesList} />
    <Route path="/movie/:movieId" component={MovieDetails} />
  </Switch>
    </div>
  );
}

export default App;
