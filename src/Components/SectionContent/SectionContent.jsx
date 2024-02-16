import React, { useEffect } from 'react'

export const SectionContent = ({title, link, img}) => {

  return (
    <div className='section-content'>
        <h2>{title}</h2>

        <article className='section-wrapper'>
        <div className='section-text'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Quod inventore impedit nisi quibusdam, voluptas obcaecati maxime sapiente cumque?
            Qui est dolor maiores esse iure quasi cum commodi quia reiciendis ad.</p>

            <div className='section-link-wrapper'>
                <a href='#' className='section-link'><span>{link ? link : "See more"}</span> <i className="bi bi-arrow-right"></i></a>
            </div>
            
        </div>
          {img && img}
        </article>
      
       
    </div>
  )
}
