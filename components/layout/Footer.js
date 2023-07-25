import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


const Footer = () => {
  return (
    <footer>
      <div className='footer-column'>
        <Link href="/" className='footer-column-head'>Holding</Link>
        <Link href="/" className='footer-column-text'><span>About Us</span></Link>
        <Link href="/" className='footer-column-text'><span>Who we are</span></Link>
        <Link href="/" className='footer-column-text'><span>Our Mission</span></Link>
        <Link href="/" className='footer-column-text'><span>Our Team</span></Link>
      </div>

      <div className='footer-column'>
        <Link href="/" className='footer-column-head'>Our Company</Link>
        <Link href="/" className='footer-column-text'><span>General Info</span></Link>
        <Link href="/" className='footer-column-text'><span>Social Responsibility</span></Link>
        <Link href="/" className='footer-column-text'><span>Human Resources</span></Link>
        <Link href="/" className='footer-column-text'><span>Company Info</span></Link>
      </div>

      <div className='footer-column'>
        <Link href="/" className='footer-column-head'>Services</Link>
        <Link href="/" className='footer-column-text'><span>Special Offers</span></Link>
        <Link href="/" className='footer-column-text'><span>Who we are</span></Link>
        <Link href="/" className='footer-column-text'><span>News</span></Link>
        <Link href="/" className='footer-column-text'><span>Business</span></Link>
      </div>

      <div className='footer-column '>
        <Link href="/" className='footer-column-head'>Social Media</Link>
        <div className='social-media-column'>
          <Link href="/" className='social-media'><Image alt='image_url' src="/formkit_instagram.png" width={20} height={20} className='social-media-logo'/><p>@beautysaloon</p></Link>
          <Link href="/" className='social-media'><Image alt='image_url' src="/formkit_facebook.png" width={20} height={20} className='social-media-logo'/><p>@beauty_saloon</p></Link>
          <Link href="/" className='social-media'><Image alt='image_url' src="/formkit_twitter.png" width={20} height={20} className='social-media-logo'/><p>@beautysaloon22</p></Link>
          <Link href="/" className='social-media'><Image alt='image_url' src="/formkit_youtube.png" width={20} height={20} className='social-media-logo'/><p>@beautyyysaloon</p></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer