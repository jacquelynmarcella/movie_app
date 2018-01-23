import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js';
import TMDB from './TMDB.js';

class App extends Component {
	constructor(props){
		super(props)
			this.state = {
				current: ''
		}
	}

	handleDetailsClick = (event) => {
		console.log(TMDB);
		const url = `https://api.themoviedb.org/3/movie/${event}?api_key=ENVNOTWORKINGSONEEDTOPASTEIN&append_to_response=videos,images&language=en`
		fetch(url).then(response => {
			response.json().then(data => {
				console.log(data);
				this.setState({
					current: data
				})

			})
		})
	}


  render() {
    return (
      <div className="film-library">
          <FilmListing films={TMDB.films} handleDetailsClick={this.handleDetailsClick} />
          <FilmDetails films={this.state.current} />
      </div>
    );
  }
}

export default App;
