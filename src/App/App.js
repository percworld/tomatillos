import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    
    return (
      <div className="main">
          <Header />
          <Footer />
      </div>
    );
  }
}

export default App;
