import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { getData, getMovie } from '../../utilities.js';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Films from '../Films/Films';
import MovieDetails from '../MovieDetails/MovieDetails';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

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
    getData()
      .then(response => this.setState({ films: response.movies }))
      .catch(error => this.setState({ error: error }))
  }

  getMovies() {
    getData()
      .then(response => this.setState({ films: response.movies }))
      .catch(error => this.setState({ error: error }))
  }

  showFeatured = (id) => {
    this.getMovies();
    getMovie(id)
      .then(response => this.setState({ featuredFilm: response.movie }))
      .catch(error => this.setState({ error: error }))
  }

  showError() {
    return (
      <article className="error">
        <h3>{this.state.error}</h3>
        <Link to='/'><div className="backArrow" onClick={() => this.setState({ error: null })}>
          <FaArrowAltCircleLeft />
          <h6 className="go-back" >See All Movies</h6>
        </div></Link>
      </article>
    )
  }

  handleSearchEntry = event => {
    this.setState({ searchField: event.target.value });
  }

  validateSearch(filteredMovies) {
    if (this.state.searchField.length) {
      if (filteredMovies.length < 1) {
        this.setState({ error: 'Sorry, there are no movies with that title' })
      } else this.setState({ films: filteredMovies, searchField: '' })
    } else this.setState({ error: 'Please enter a movie name' })
  }

  searchByWord = event => {
    event.preventDefault();
    const splitString = this.state.searchField.split(' ');
    const filteredMovies = this.state.films.filter(movie => {
      const titleArray = movie.title.toLowerCase().split(' ')
      return splitString.find(word => titleArray.includes(word.toLowerCase()))
    })
    this.validateSearch(filteredMovies)

  }

  render() {
    return (
      <div className="main">
        <Header getMovies={this.getMovies} />
        <Switch>
          <Route exact path="/"
            render={() => (
              !this.state.error ?
                <Films films={this.state.films}
                  searchField={this.state.searchField}
                  showFeatured={this.showFeatured}
                  handleSearchEntry={this.handleSearchEntry}
                  searchByWord={this.searchByWord}
                /> : this.showError()
            )} />
          <Route path="/:id" render={() => (
            this.state.featuredFilm &&
            <MovieDetails film={this.state.featuredFilm} />)
          } />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
