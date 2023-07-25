import React from 'react'
import style from '@/styles/Home3.module.css'
import Link from 'next/link'

const Home3 = () => {
  return (
    <div className={style.main}>
        <div className={style.text}>
            <p className={style.about_us}>Contact Info</p>
            <p className={style.welcome}>Get in Touch with Us</p>
            <div className={style.info}>
                <div className={style.each_info}>
                    <p className={style.heading}>Adress:</p>
                    <p className={style.subheading}>Istanbul, Turkey</p>
                </div>
                <div className={style.each_info}>
                    <p className={style.heading}>Phone:</p>
                    <p className={style.subheading}> 555-432-54-65</p>
                </div>
                <div className={style.each_info}>
                    <p className={style.heading}>E-mail:</p>
                    <p className={style.subheading}>info@beautysalon.com</p>
                </div>
            </div>
            <Link href="/" className={style.link}>Get In Touch!</Link>
        </div>
        
        <iframe
            className={style.map}
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24068.51676661093!2d28.9877828!3d41.05664975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1689753500289!5m2!1str!2str"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />

        
    </div>
  )
}

export default Home3