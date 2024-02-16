import React, { useEffect, useState } from 'react'
import MenuMobile from '../MenuMobile/MenuMobile'
import { Logo } from '../Logo/Logo'
import { NavLinks } from '../NavLinks/NavLinks'
import { UserLogin } from '../UserLogin/UserLogin'

export const Header = () => {

    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsVisible(currentScrollTop < lastScrollTop || currentScrollTop < 100); 
            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);



  return (
    <header className={`scroll-hide-show ${isVisible ? 'visible' : 'hidden'}`}>

            <div className='header-top-links'>
                <UserLogin/>
            </div>
            
            <nav>
                <Logo/>
                <div className='nav-pc-links-wrapper'>
                    <NavLinks/>
                </div>
                <MenuMobile/>
            </nav>
           
    </header>
  )
}
