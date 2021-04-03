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

  showFeatured = (id) => {
    getMovie(id)
      .then(response => this.setState({ featuredFilm: response.movie }))
      .catch(error => this.setState({ error: error }))
  }

  showError() {
    return (
      <article className="error">
        <h2>Sorry something went wrong - please reload the page.</h2>
        <Link to='/'><div className="backArrow">
          <FaArrowAltCircleLeft />
          <h6 className="go-back" >Go Home</h6>
        </div></Link>
      </article>
    )
  }

  handleSearchEntry = event => {
    // if not a number - not empty - should be covered with proptypes
    this.setState({ searchField: event.target.value });
  }

  searchByWord = event => {
    event.preventDefault();
    const splitString = this.state.searchField.split(' ');
    const filteredMovies = this.state.films.filter(movie => {
      const titleArray = movie.title.toLowerCase().split(' ')
      return splitString.find(word => titleArray.includes(word.toLowerCase()))
    })
    this.setState({ films: filteredMovies, searchField: '' })
    if (filteredMovies.length < 1) {
      console.log('Oh no, there are no movies with that title!')
    }
  }

  render() {

    return (
      <div className="main">
        <Header />
        {!this.state.error && !this.state.films.length &&
        <h2>Loading...</h2>}
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
