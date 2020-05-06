import React, { Component } from 'react';
import '../css/movieDetails.css';
import {  getMovieDetail } from '../../../utility/movieUtitlity';
import { BASE_IMAGE_URL } from '../../../constant/movieConstant';

export default class MovieDetails extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            movieDetails:{}
        };
    }

  async componentDidMount(){
  const result =  await getMovieDetail(this.props.match.params.movieId);
  this.setState({
      movieDetails : result.data
  })
    }

    render() {
        const { movieDetails } = this.state;
        return (
            <section className='m-container'>
                <section className='m-detalis-header'>
                    <h3>Movie Details</h3>
                </section>
                <section className='m-details-body'>
                    <section className='m-details-picture'>
                        <img src={`${BASE_IMAGE_URL}w180${movieDetails.backdrop_path}`} alt="" />
                    </section>
                    <section className='m-details-content'>
                        <h1 className='m-title'>
                        {movieDetails.original_title} {movieDetails.vote_average}</h1>
                        <p>{movieDetails.release_date} | {movieDetails.runtime} | Director...</p>
                        <p>Cast: Actor</p>
                        <p>{}</p>
                    </section>
                </section>
            </section>
        )
    }
}
