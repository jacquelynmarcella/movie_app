import React, { Component } from 'react';
import FilmPoster from './FilmPoster.js';

class FilmRow extends Component {
	// constructor(props){
	// 	super(props)
	// 		this.state = {
	// 			title: ''
	// 	}
	// }

	// handleDetailsClick = (event) => {
	// 	event.preventDefault();
	// 	console.log(this.refs.movieId.id);
	// 	const url = `https://api.themoviedb.org/3/movie/${this.refs.movieId.id}?api_key=09e23ceb9f67db24cc098e93fe399ea4&append_to_response=videos,images&language=en`
	// 	fetch(url).then(response => {
	// 		response.json().then(data => {
	// 			console.log(data);
	// 		})
	// 	})
	// }

	render(){
		return (
			<div className="film-summary">
				<FilmPoster posterId={this.props.posterUrl} />
    			<a href="#" id={this.props.id} ref={this.props.id} onClick={this.props.handleDetailsClick.bind(this,this.props.id)}><h1>{this.props.title}</h1></a>
    			<p>{this.props.date}</p>
  			</div>
		);
	}
}

export default FilmRow;