import React, { Component } from 'react';
import '../css/moviesList.css'
import { withRouter } from 'react-router-dom';
import { getUpcomingMovies, searchMovies } from '../../../utility/movieUtitlity';
import { BASE_IMAGE_URL } from '../../../constant/movieConstant';
class MoviesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            upcomingMovies: []
        }
    }

    handleSearchQueryChange = async (event) => {
        const query = event.target.value;
        if(query.trim().length) {
         const result = await searchMovies(query);
         this.setState({
             upcomingMovies:result.data.results
         })
        } else {
         const result = await getUpcomingMovies();
         this.setState({ upcomingMovies: result.data.results});
        }
    };
    handleClick = async (event) => {
        const { history } = this.props;
    history.push(`/movie/${event.id}`);
    }

    async componentDidMount() {
      const result = await getUpcomingMovies();
      this.setState({ upcomingMovies: result.data.results});
    }

    render() {
        return (
            <section className='list-container'>
                <section className='list-header'>
                    <section className='search-box'>
                        <input type="text" placeholder="Search" 
                        value={this.state.query}
            onChange={this.handleSearchQueryChange}
            />
                    </section>
                </section>
                <section className='list-movies'>
                    {
                        this.state.upcomingMovies.length && this.state.upcomingMovies.map(movie => {
                            return (<section key={movie.id}  onClick={() => this.handleClick(movie)} className='list-movie-box'>
                                <div className='movie-image-box'>
                                    <img src={`${BASE_IMAGE_URL}w200${movie.poster_path}`} alt="" />
                                </div>
                                <div className='m-content-wrapper'>
                                    <div className='m-title-rating'>
                                        <p>{movie.original_title}</p>
                                        <p>{movie.vote_average}</p>
                                    </div>
                                    <div className='description'>
                                        <p>{movie.overview}</p>
                                    </div>
                                </div>
                            </section>)
                        })
                    }
                </section>
            </section>
        )
    }
}

export default withRouter(MoviesList);