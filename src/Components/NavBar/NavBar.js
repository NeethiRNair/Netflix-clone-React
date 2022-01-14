import React from 'react'
import './NavBar.css'
function NavBar() {
    return (
        <div className='navbar'>
            {/* <div className='logo-div'> */}
                <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>
            {/* </div> */}
            <div className='nav-div'>    
                <ul className='nav-list'>
                    <li className='nav-item'><a className="active" href="">Home</a></li>
                    <li className='nav-item'><a  href="#news">Tv Shows</a></li>
                    <li className='nav-item'><a  href="#contact">Movies</a></li>
                    <li className='nav-item'><a  href="#about">Recently Added</a></li>
                    <li className='nav-item'><a  href="#about">My List</a></li>
                </ul>
            </div>
            
            <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
        </div>
    )
}

export default NavBar
