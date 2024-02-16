import React from 'react'
import { SectionContent } from '../../Components/SectionContent/SectionContent'
import ImgLayout from '../../Components/ImgLayout/ImgLayout'

import cabaña from '../../assets/cabaña.jpg'
import montaña from '../../assets/montañas.jpg'
import auroraBoreal from '../../assets/aurora_boreal.jpg'

export const ServicesContainer = () => {
  return (
    <section className='services-container' id='services'>
        <SectionContent title="Service Title" img={<ImgLayout img={cabaña}/>}/>
        <SectionContent title="Service Title" img={<ImgLayout img={auroraBoreal}/>}/>
        <SectionContent title="Service Title" img={<ImgLayout img={montaña}/>}/>
    </section>
  )
}
