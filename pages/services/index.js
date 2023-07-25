import PageTop from '@/components/PageTop'
import React from 'react'
import fsPromises from 'fs/promises';
import path from 'path'
import ServiceCard from '@/components/ServiceCard';
import style from '@/styles/Services.module.css'
import Head from 'next/head'



export const getStaticProps= async ()=>{
  const filePath = path.join(process.cwd(), 'json/data.json');
  const jsondata= await fsPromises.readFile(filePath);
  const data = JSON.parse(jsondata);
  return{
    props: { services: data }
  }
}

const services = ({services}) => {
  return (
    <>
    <Head>
        <title>Services</title>
        <link rel="icon" href="/png-clipart-face-icon-beautiful-woman-face-business-woman-beautiful-vector-removebg-preview.png" />
      </Head>
    <main>
      <PageTop imageurl="/engin-akyurt-g-m8EDc4X6Q-unsplash.jpg" text="Our Services"/>
      <div className={style.cards}>
        {services.map((service) => (
          <ServiceCard key={service.index} imageurl={service.picture} title={service.name} text={service.about} id={service.index}/>
        ))}
      </div>
    </main>

    </>
  )
}

export default services