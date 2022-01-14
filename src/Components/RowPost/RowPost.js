import React, { useEffect, useState } from 'react';
import './RowPost.css';
import axios from '../../axios';
import { API_KEY, imageUrl} from '../../constants/constants';

function RowPost(props) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(`${props.url}`)
        .then((response) => {
            setMovies(response.data.results);
        })
        .catch((err) => {
            alert("Network error")
        })
    }, []);

    return (
        <div className='rowpost'>
            <h2>{props.title? props.title : ''}</h2>
            <div className="posters">
                {movies.map((movie) => {
                    return (
                        <img className={props.isSmall? 'small-poster' : 'poster'} src={`${movie? imageUrl+movie.backdrop_path : ''}`} alt="Poster" />
                    )
                })}
                
            </div>  
        </div>
    )
}

export default RowPost
