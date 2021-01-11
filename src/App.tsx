import React, { useEffect, useState } from 'react';
import './components/FontAwsomeIcons/FontAwsomeIcons';  
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
import './App.scss';
//import './Requests';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import requests from './Requests';
import Footer from './components/Footer/Footer';
//import Main from './components/Main/Main';
import Cart from './components/Cart/Cart'
import IMovie from './models/IMovie';
import axios from './Axios';

function App() {

  const defaultValueMovies: IMovie[] = [];
  const [movies, setMovies] = useState(defaultValueMovies);

  useEffect(() => {
      async function fetchData() {
          try {
              const result = await axios.get<IMovie[]>(requests.productsUrl);
              setMovies(result.data);
          }
          catch(err) {
              console.log(err.message);
          }
      }
      fetchData();
  }, [requests.productsUrl])

  return (
    <Router>
      <div className="App">
          <Header></Header>
          <Switch>
            <Route exact path='/'><div>hem</div></Route>
            <Route path='/products'><Products products={movies}></Products></Route>
            <Route path='/cart'><Cart></Cart></Route>
            </Switch>
          <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
