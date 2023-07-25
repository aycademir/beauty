import React from 'react'
import Image from 'next/image'
import style from '@/styles/ProjectCard.module.css'
import Link from 'next/link'


const ServiceCard = ({imageurl, title, text , id}) => {
  
  return (
    <Link className={style.main} href={"/services/"+ id}>
        <div className={style.image_container}> 
            <Image src={imageurl} 
              width={360}
              height={300}
              className={style.image}
              alt='image_url'
              />
        </div>
        <div className={style.ana}>
        <p className={style.title}>{title}</p>
        <p className={style.text}>{text}</p>
        </div>
        
    </Link>
  )
}

export default ServiceCard