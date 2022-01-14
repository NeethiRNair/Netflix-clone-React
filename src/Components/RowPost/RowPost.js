import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import './RowPost.css';
import axios from '../../axios';
import { API_KEY, imageUrl} from '../../constants/constants';

function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [movieUrlId, setMovieUrlId] = useState('');
    useEffect(() => {
        axios.get(`${props.url}`)
        .then((response) => {
            setMovies(response.data.results);
        })
        .catch((err) => {
            alert("Network error")
        })
    }, []);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
    };
    const handleMovie = (movieId) => {
        console.log(movieId)
        axios.get(`movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`)
        .then((response)=> {
            if(response.data.results.length!==0) {
                setMovieUrlId(response.data.results[0].key)
            }
        })
    }

    return (
        <div className='rowpost'>
            <h2>{props.title? props.title : ''}</h2>
            <div className="posters">
                {movies.map((movie) => {
                    return (
                        <img onClick={()=> {handleMovie(movie.id)}} className={props.isSmall? 'small-poster' : 'poster'} src={`${movie? imageUrl+movie.backdrop_path : ''}`} alt="Poster" />
                    )
                })}
                
            </div>  
            { movieUrlId && <YouTube videoId={movieUrlId} opts={opts} />}
        </div>
    )
}

export default RowPost
