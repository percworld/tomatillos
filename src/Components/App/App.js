import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Films from '../Films/Films';
import MovieDetails from '../MovieDetails/MovieDetails';

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: [], 
      featuredFilm: null
    }
  }

  componentDidMount() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    .then(response => response.json())
    .then(response => this.setState({films: response.movies}))
    .catch(error => this.showError(error))
  }

  showError(error) {
    console.log(error)
  }  

  showFeatured = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    .then(response => this.setState({featuredFilm: response.movie}))
    .catch (error => this.showError(error.message))
  }

  render() {
    
    return (
      <body className="main">
        <div className="contentWrap">
          <Header />
          {!this.state.featuredFilm && 
            <Films films={this.state.films} showFeatured={this.showFeatured}/>
          }
          {this.state.featuredFilm && 
            <MovieDetails film={this.state.featuredFilm}/>
          }
          <Footer />
        </div>
      </body>
    );
  }
}

export default App;
