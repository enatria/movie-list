import React from 'react'
import './style.css'
const preloader = require('./preloader.gif')

const Loading = () => {
  return (
    <div className='preloader'>
      <img src={preloader} width={100} alt='loading...' />
      <p>Please Wait!</p>
    </div>
  )
}

export default Loading;
