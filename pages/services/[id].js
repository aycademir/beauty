import React from 'react'
import fsPromises from 'fs/promises';
import path from 'path'
import Head from 'next/head'


export const getStaticPaths= async () => {
  const filePath = path.join(process.cwd(), 'json/data.json');
  const jsondata= await fsPromises.readFile(filePath);
  const data = JSON.parse(jsondata);
  const paths = data.map((item)=>(
    {params: {id: item.index.toString()}}
  ))

  return {
    paths, fallback:true
  }
}


export const getStaticProps= async (context)=>{
  const id=context.params.id;
  const filePath = path.join(process.cwd(), `json/data.json`);

  const jsondata= await fsPromises.readFile(filePath);
  const data = JSON.parse(jsondata);

  const service = data.find((item)=>item.index.toString()===id);
  return{
    props: { service }
  }
}

const Id = ({service}) => {
  return (
    <>
    <Head>
        <title>{service.index}</title>
        <link rel="icon" href="/png-clipart-face-icon-beautiful-woman-face-business-woman-beautiful-vector-removebg-preview.png" />
      </Head>
    <div style={{height: "100vh", textAlign: "center", alignItems: "center", justifyContent:"center", display: "flex"}}>
      <p style={{fontSize: "30px"}}>This page is for index {service.index}</p>
    </div>
    </>
  )
}

export default Id