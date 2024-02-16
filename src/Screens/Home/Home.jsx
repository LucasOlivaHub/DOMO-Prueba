import React, { useEffect } from 'react'
import { SectionContent } from '../../Components/SectionContent/SectionContent'

export const Home = () => {

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const element = entry.target.querySelector('.section-content');
  
      if (entry.isIntersecting) {
        element.classList.add('main-anim');
      return; // Si se añade la animacion, terminar funcion
      }
  
      // Remover si no se está enfocando el elemento
      element.classList.remove('main-anim');
    });
  });
  
  useEffect(()=> {
    observer.observe(document.querySelector('main'));
  }, [])


  return (
    <main id='home'>
        <SectionContent title={"Hero Title"} link={"About us"}/>
    </main>
  )
}
