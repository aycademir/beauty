import React from 'react'
import Image from 'next/image'
import style from '@/styles/About.module.css'

const AboutUsBottom = () => {
  return (
    <div className={style.main}>
        <div className={style.text}>
            <p className={style.about_us}>About Us</p>
            <p className={style.welcome}>Welcome to the Best Beauty Salon</p>
            <p className={style.info}>This is where transformation unfolds. It's a haven where skilled hands work their magic, unveiling inner radiance. Within those walls, dreams of flawless hair, glowing skin, and immaculate nails become reality. With pampering touches and soothing ambiance, our salon nurtures both body and soul, leaving a trail of confident smiles in its wake.</p>
        </div>
        <div className={style.image_container}>
          <Image 
              alt='image_url'
              src="/output-onlinepngtools (1).png"
              width={100}
              height={100}
              layout="responsive"
              className={style.image}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
        
    </div>
  )
}

export default AboutUsBottom