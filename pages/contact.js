import PageTop from '@/components/PageTop'
import React from 'react'
import Head from 'next/head'
import style from '@/styles/Contact.module.css'
import ContactForm from '@/components/ContactForm'

const contact = () => {
  
  return (
    <>
    <Head>
        <title>About</title>
        <link rel="icon" href="/png-clipart-face-icon-beautiful-woman-face-business-woman-beautiful-vector-removebg-preview.png" />
    </Head>
    <PageTop imageurl="/engin-akyurt-g-m8EDc4X6Q-unsplash.jpg" text="Contact Us!"/>
    <div>
    
      <ContactForm/>
    </div>
      
    </>
  )
}

export default contact