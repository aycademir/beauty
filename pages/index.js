import Head from 'next/head'

import { Inter } from 'next/font/google'
import Home1 from '@/components/Home1'
import Home2 from '@/components/Home2'
import Home3 from '@/components/Home3'
import Slide from '@/components/Slide'
import AboutUsBottom from '@/components/AboutUsBottom'
import ScrollUpButton from '@/components/ScrollUpButton'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>   
      <Head>
        <title>Home</title>
        <link rel="icon" href="/png-clipart-face-icon-beautiful-woman-face-business-woman-beautiful-vector-removebg-preview.png" />
      </Head>
      <main>
        <Slide/>
        <AboutUsBottom/>
        <Home1/>
        
        <Home2/>
        <Home3/>
        
      </main>
    </>
  )
}
