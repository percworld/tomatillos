import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Films from '../Films/Films';
import movieData from '../data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: movieData.movies, 
    }
  }

  render() {
    
    return (
      <div className="main">
        <div className="contentWrap">
          <Header />
          <Films films={this.state.films}/>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
