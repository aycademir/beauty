import React from 'react'
import Image from 'next/image'

const PageTop = ({imageurl, text}) => {
  return (
    <div className='page-top'>
      <div className='page-top-image-container'>
        <Image src={imageurl}
        width={0}
        height={0}
        sizes="100vw"  
        className="page-top-image"
        alt='image_url'
        />
      </div>
      <div className='page-top-text'>
        <p className='page-top-title'>{text}</p>
        <p className='page-top-subtitle'> {text} &gt; Lorem ipsum, dolor sit amet consectetur adipisicing elit. A veniam explicabo provident, eius quo assumenda! Culpa, similique quibusdam rerum hic ratione exercitationem! Neque, ea?</p>
      </div>
      
    </div>
  )
}

export default PageTop