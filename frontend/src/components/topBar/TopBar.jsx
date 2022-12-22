import React from 'react'
import './topbar.css'
import profil from '../../assets/profil.jpg'

export default function TopBar() {
  return (
    <>
      <div className='top'>
        <div className="topLeft">
          <i className='topIcon fab fa-facebook-square'></i>
          <i className='topIcon fab fa-twitter-square'></i>
          <i className='topIcon fab fa-instagram-square'></i>
          <i className='topIcon fab fa-pinterest-square'></i>
        </div>
        <div className='topCenter'>
          <ul className='topList'>
            <li className='topListItem'>Home</li>
            <li className='topListItem'>About</li>
            <li className='topListItem'>Contact</li>
            <li className='topListItem'>Write</li>
            <li className='topListItem'>Logout</li>
          </ul>
        </div>
        <div className='topRight'>
          <img
            className='topImg'
            src={ profil }
            alt="Profil Picture"
          />
          <i className='topSearch fa-solid fa-magnifying-glass'></i>
        </div>
      </div>
    </>
  )
}
