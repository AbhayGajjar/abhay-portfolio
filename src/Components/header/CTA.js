import React from 'react'
import resume from "../../assets/abhaygajjar.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={resume} download className='btn'>DOWNLOAD CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA