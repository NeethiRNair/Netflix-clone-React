import React, {useEffect, useState} from 'react';
import './Banner.css';
import axios from '../../axios';
import {API_KEY, imageUrl} from '../../constants/constants';

function Banner() {
    const [movie, setMovie] = useState();
    const maxOverview = 250;
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
        .then((response) => {
            let movieNum = Math.floor(Math.random() * (response.data.results.length-1));
            setMovie(response.data.results[movieNum]);
        })
    }, []);

    return (
        <div style={{backgroundImage: `url(${movie? imageUrl+movie.backdrop_path : ''})`}} className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ? (movie.title? movie.title : movie.name) : '' }</h1>
                <div className='banner-buttons'>
                    <button className='banner-btn'>Play</button>
                    <button className='banner-btn'>My List</button>
                </div>
                <h3 className='description'>{movie ? movie.overview.substring(0, maxOverview)+'...' : ''}</h3>
            </div>
            <div className="fade-bottom"></div>
        </div>
    )
}

export default Banner
