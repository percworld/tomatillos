import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Films from '../Films/Films';
import MovieDetails from '../MovieDetails/MovieDetails';
import { FaArrowAltCircleLeft } from 'react-icons/fa'

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: [],
      error: '',
      featuredFilm: null,
      searchField: ''
    }
  }

  componentDidMount() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => {
        if(response.ok){
          return response.json()
        } else {
          throw new Error('This isnt working')
        }
      })
      .then(response => this.setState({ films: response.movies }))
      .catch(error => this.setState({ error: error }))
  }

  showError({showHome}) {
      return (
        <article className="error">
          <h2>Sorry something went wrong - please reload the page.</h2>
          <div className="backArrow" onClick={showHome}>
            <FaArrowAltCircleLeft />
            <h6 className="go-back" >Go Back</h6>
          </div>
        </article>
      )
  }

  showFeatured = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
      .then(response => this.setState({ featuredFilm: response.movie }))
      .catch(error => this.setState({ error: error }))
  }

  showHome = () => {
    this.setState({ featuredFilm: null });
    this.componentDidMount();
  }

  handleSearchEntry = event => {
    this.setState({ searchField: event.target.value });
  }

  searchByWord = event => {
    event.preventDefault();
    const splitString = this.state.searchField.split(' ');
    const filteredMovies = this.state.films.filter(movie => {
      const titleArray = movie.title.toLowerCase().split(' ')
      return splitString.find(word => titleArray.includes(word.toLowerCase()))
    })
    this.setState({ films: filteredMovies })
    this.state.searchField = ''; 
    if(filteredMovies.length < 1){
      console.log('Oh no, there are no movies with that title!')
    }
  }

  render() {

    return (
      <div className="main">
        <Header showHome={this.showHome} />
        {this.state.error && this.showError(this.showHome)}
        {!this.state.featuredFilm &&
          <Films films={this.state.films}
            searchField={this.state.searchField}
            showFeatured={this.showFeatured}
            handleSearchEntry={this.handleSearchEntry}
            searchByWord={this.searchByWord}
          />
        }
        {this.state.featuredFilm &&
          <MovieDetails film={this.state.featuredFilm} showHome={this.showHome} />
        }
        <Footer />
      </div>
    );
  }
}

export default App;
