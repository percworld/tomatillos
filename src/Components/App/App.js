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
      hasError: null,
      featuredFilm: null,
      searchField: ''
    }
  }

  componentDidMount() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => response.json())
      .then(response => this.setState({ films: response.movies }))
      .catch(error => this.setState({ hasError: error }))
  }

  showError() {
    <article className="error">
      This movie is not currently available. Click below to confirm
      <button onClick={this.showHome} />
    </article>
  }

  showFeatured = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
      .then(response => this.setState({ featuredFilm: response.movie }))
      .catch(error => this.setState({ hasError: error }))
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
    //console.log(this.state.films);

    const filteredMovies = this.state.films.filter(movie => {
      const titleArray = movie.title.toLowerCase().split(' ')
      return splitString.find(word => titleArray.includes(word.toLowerCase()))
    })
    console.log(filteredMovies);
    //console.log(this.state.searchField)
    this.setState({ films: filteredMovies })
  }

  render() {

    return (
      <div className="main">
        <div className="contentWrap">
          <Header showHome={this.showHome} />
          {this.state.hasError && this.showError()}
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
      </div>
    );
  }
}

export default App;
