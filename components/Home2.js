import React from 'react'
import style from '@/styles/Home2.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Home2 = () => {

    return (
        <div className={style.main}>
            <div className={style.image_container}>
                <Image src="/content-pixie-j1WYUNgLbOk-unsplash.jpg"
                width={0}
                height={0}
                sizes="100vw"  
                className={style.image}
                alt='image_url'
                />
            </div>
            <div className={style.text}>
            
                <p className={style.sub_text}>Strategies That Work Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga velit, assumenda ipsa, facere ducimus id rerum, itaque minus dolore porro quis animi ea architecto iure commodi. Fuga iure harum beatae?</p>
                
                <div className={style.link_div}><Link href='/about' className={style.link}>Discover</Link></div>
            </div>
            
        </div>
    )
}

export default Home2