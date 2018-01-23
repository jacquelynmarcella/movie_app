import React, { Component } from 'react';
import FilmPoster from './FilmPoster.js';

class FilmRow extends Component {
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