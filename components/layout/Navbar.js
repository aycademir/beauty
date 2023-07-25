import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from '@/styles/Navbar.module.css'


const Navbar = () => {
  const [active, setActive] = useState(false)
    const links = [
        {name: "Home", link:"/"},
        {name: "About", link:"/about"},
        {name: "Services", link:"/services"},
        {name: "Contact Us!", link:"/contact"},
    ]
  
  return (
    <nav className={style.nav}>
        <div className={style.logo} >
            <Link href="/">
                <Image alt='image_url' src="/png-clipart-face-icon-beautiful-woman-face-business-woman-beautiful-vector-removebg-preview.png" width={70} height={70}/>
            </Link>
        </div>
        <div className={style.menu}>
          
        </div>
        
        <div onClick={()=>setActive(!active)}>
            <div className={active? style.activehamburger : style.hamburger}/>
        </div>
        <div className={active ? style.activeSidenav : style.sidenav}>
            <ul className={style.ul}>
            {links.map((page) => {
                return <li key={page.name}className={page.name==="Contact Us!" ? style.contactli: style.li} onClick={()=>setActive(!active)}><Link href={page.link}>{page.name}</Link></li>
            
            })}
            </ul>
        </div>
        {links.map((page) =>{
          return <Link href={page.link} key={page.name} className={style.link}>{page.name}</Link>
        })}
        
    </nav>
  )
}

export default Navbar