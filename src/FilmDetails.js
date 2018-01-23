import React, { Component } from 'react';

class FilmDetails extends Component {
	render() {
	const backdropUrl = `https://image.tmdb.org/t/p/w1280/${this.props.films.backdrop_path}`
	const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.films.poster_path}`
	console.log(this.props);
	console.log(backdropUrl);
		return (
			<div className="film-details">
         		<h1 className="section-title">DETAILS</h1>			

			<div className="film-detail is-hydrated">
 			 <figure className="film-backdrop">
    			<img src={backdropUrl} alt="" />
    			<h1 className="film-title">{this.props.films.title}</h1>
 				</figure>

 			 <div className="film-meta">
    			<h2 className="film-tagline">{this.props.films.tagline}</h2>
    			<p className="film-detail-overview">
      				<img src={posterUrl} className="film-detail-poster" alt={this.props.films.title} />
      				{this.props.films.overview}
   		 		</p>
  			</div>
			</div>
			</div>
		);
	}
}

export default FilmDetails;