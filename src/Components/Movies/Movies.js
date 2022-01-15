import React from 'react';
import RowPost from '../RowPost/RowPost';
import './Movies.css';
import { originals, action, comedy, horror, romance, documentaries } from '../../urls';

function Movies() {
    return (
        <div className='movies'>
            <div className='movies-content'>

                <h2>Movies</h2>
                <div className="genre-div">
                    <select className='genres'>
                        <option value="">All Genres</option>
                        <option value="28">Action</option>
                        <option value="12">Adventure</option>
                        <option value="16">Animation</option>
                        <option value="35">Comedy</option>
                        <option value="27">Horror</option>
                    </select>
                </div>

            </div>
            <RowPost url={action} title='Action' isSmall/>
            <RowPost url={comedy} title='Comedy' isSmall/>
            <RowPost url={horror} title='Horror' isSmall/>
            <RowPost url={romance} title='Romance' isSmall/>
            
            
        </div>
    )
}

export default Movies
