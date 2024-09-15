import React from 'react'
import './work.css'
import image from '../assets/image.png'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const Work = () => {
  return (
    <>
        <h2 >Our Work</h2>
    <div className='work'>  
    <AwesomeSlider style={{
      display: 'flex',
    width: '90%',
    marginLeft: '65px',
    border: '8px solid #dc1e5e',
    height: '60%',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20px',
    objectFit: 'cover'
    }}>
    <img src={image} alt='image' />
    </AwesomeSlider>
    </div>
    </>
  )
}

export default Work