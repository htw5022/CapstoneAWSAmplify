import Head from 'next/head'
import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const handleButtonClick = (color) => {
   
    // axios({
    //   method: 'post',
    //   url: 'http://localhost:5000/api',
    //   data: {
    //     light: color
    // }
    // }).then((res) => {
    //   console.log(res)
    // }).catch(err=> {
    //   console.warn(err)
    // });

    axios.post('http://localhost:5000/api', {
      light: color
    }).then(res => {
      console.log(res);
    })
   }

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          Traffic light signal
        </h1>
        
        <div className='action-btn'>
          <button onClick={ () => handleButtonClick('red')} className='btn btn-red'>
            Red
          </button>
          <button onClick={() => handleButtonClick('yellow')} className="btn btn-yellow">
            Yellow
          </button>
          <button onClick={() => handleButtonClick('green')} className='btn btn-green'>
            Green
          </button>
        </div>

      </main>

      
    </div>
  )
}
