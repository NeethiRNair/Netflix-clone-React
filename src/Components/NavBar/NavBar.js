import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    const navigate = useNavigate(); 
    return (
        <div className='navbar'>
            {/* <div className='logo-div'> */}
                <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>
            {/* </div> */}
            <div className='nav-div'>    
                <ul className='nav-list'>
                    <li className='nav-item' onClick={()=> navigate('/')}><span className="active" >Home</span></li>
                    <li className='nav-item'><span  onClick={()=> navigate('/movies')}>Movies</span></li>
                    <li className='nav-item'><span  href="">Tv Shows</span></li>
                    <li className='nav-item'><span  href="">Recently Added</span></li>
                    <li className='nav-item'><span  href="">My List</span></li>
                </ul>
            </div>
            
            <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
        </div>
    )
}

export default NavBar
