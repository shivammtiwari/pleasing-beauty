import React from 'react'
import Navbar from '../Navbar/Navbar'
import './ParlourList.css'
import { useParams } from 'react-router-dom'
import Homepage from './List'
import Footer from '../Footer/Footer'

const ParlourList = () => {

    const { city } = useParams()

  return (
    <>
    <Navbar/>
    <div className='ParlourHeaderWrap'>
    <div className='ParlourHeader'>
    <i class="fa-sharp fa-solid fa-location-dot"></i>
        <h2>
            {city}
        </h2>
    </div>
    </div>
    <Homepage/>
    <Footer/>
    </>
  )
}

export default ParlourList