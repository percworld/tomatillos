import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Films from '../Films/Films';
//import movieData from '../../data';
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

  showFeatured = (event) => {
    const id = event.target.id;
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/:movie_${id}`)
    .then(response => response.json())
    .then(response => this.setState({featuredFilm: response}))
    .catch (error => this.showError(error.message))
  }
  
  render() {
    
    return (
      <body className="main">
        <div className="contentWrap">
          <Header />
          {!this.state.featuredFilm && 
            <Films films={this.state.films}/>
          }
          {this.state.featuredFilm && 
            <MovieDetails film={this.state.featuredFilm} showFeatured={this.showFeatured}/>
          }
          <Footer />
        </div>
      </body>
    );
  }
}

export default App;
