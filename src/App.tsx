import React from 'react';
import './components/FontAwsomeIcons/FontAwsomeIcons';  
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import './Requests';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import requests from './Requests';
import Footer from './components/Footer/Footer';

function App() {
  return (
   <div className="App">
      <Router>
        <Header></Header>
          <Switch>
          <Route exact path='/'><div>hem</div></Route>
          <Route path='/products'><Products endUrl={requests.productsUrl}></Products></Route>
          <Route path='/cart'><div>varukorg</div></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
