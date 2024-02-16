import React from 'react'
import contactimg from '../../assets/contact-profile.png'


export const Footer = () => {
  return (
    <footer id='contact'>
        <p>Developer Contact</p>
        <div className='footer-up'>
            <div className='contact-wrapper'>
                <img src={contactimg}></img>
                <div className='contact-links'>
                   <a href='https://wa.me/5491162223519'><i class="bi bi-whatsapp" target='_blank'> +54 911 6222-3519</i></a>
                   <a href='https://lucasoliva.com.ar/' target='_blank'><i class="bi bi-tv"> Portfolio</i></a>
                </div>
            </div>
            <div className='social-media-wrapper'>
                <a href='https://www.linkedin.com/in/lucas-oliva-38858320b/' target='_blank'><i class="bi bi-linkedin"></i></a>
                <a href='https://github.com/LucasOlivaHub'><i class="bi bi-github" target='_blank'></i></a>
                <a href='mailto:lucasolivah@gmail.com' target='_blank'><i class="bi bi-envelope"></i></a>
            </div>
        </div>
        <div className='footer-down'>
            <div>
            <span>Copyright © Lucas Hernán Oliva 2024</span>
            <span> - Desafío web para DOMO -</span>
            </div>
            <button onClick={() => window.scrollTo(0,0)}><i class="bi bi-chevron-up"></i></button>
        </div>
        
    </footer>
  )
}
