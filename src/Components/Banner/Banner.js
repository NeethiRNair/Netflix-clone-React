import React from 'react';
import './Banner.css'

function Banner() {
    return (
        <div className='banner'>
            <div className='content'>
                <h1 className='title'>Title</h1>
                <div className='banner-buttons'>
                    <button className='banner-btn'>Play</button>
                    <button className='banner-btn'>My List</button>
                </div>
                <h3 className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maxime architecto debitis recusandae sunt deleniti magni voluptas natus quis, corrupti fugiat. Tempora quaerat facilis illum numquam rem blanditiis vitae fugit?</h3>
            </div>
            <div className="fade-bottom"></div>    
        </div>
    )
}

export default Banner
