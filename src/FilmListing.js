import React, { Component } from 'react';
import FilmRow from './FilmRow.js';

class FilmListing extends Component {
	render(){
		const allFilms = this.props.films.map( film => {
			return <FilmRow title={film.title} date={film.release_date} id={film.id} posterUrl={film.poster_path} handleDetailsClick={this.props.handleDetailsClick} />
		})
		return (
			<div className="film-list">
          		<h1 className="section-title">FILMS</h1>
				{allFilms}
			</div>
		);
	}
}

export default FilmListing;