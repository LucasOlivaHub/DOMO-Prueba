import React from 'react'

export const NavLinks = ({handleShow}) => {
  return (
        <div className='nav-links-mobile'>
            <a href='#home' onClick={handleShow}>Home</a>
            <a href='#aboutus' onClick={handleShow}>About us</a>
            <a href='#services' onClick={handleShow}>Services</a>
            <a href='#contact' onClick={handleShow}>Contact</a>
        </div>
  )
}
