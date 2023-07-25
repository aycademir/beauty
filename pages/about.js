import AboutUsBottom from '@/components/AboutUsBottom'
import PageTop from '@/components/PageTop'
import React from 'react'
import Head from 'next/head'


const about = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/png-clipart-face-icon-beautiful-woman-face-business-woman-beautiful-vector-removebg-preview.png" />
      </Head>
      <PageTop imageurl="/engin-akyurt-g-m8EDc4X6Q-unsplash.jpg" text="About" />
      <AboutUsBottom/>
    </div>
  )
}

export default about