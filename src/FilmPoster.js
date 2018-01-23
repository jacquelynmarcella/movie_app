import React, { Component } from 'react';

class FilmPoster extends Component {
	render() {
		const posterUrl = "https://image.tmdb.org/t/p/w780/";
		const imageId = this.props.posterId;
		const moviePosterUrl = posterUrl + imageId;
		return (
			<div>
				<img src={moviePosterUrl} alt={imageId} />	
			</div>
		);
	}
}

export default FilmPoster;