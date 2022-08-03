import React from 'react'
import "./Reasons.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"



const Reasons = () => {
  return (
    <div className="Reasons" id='whyus'> 
    <div className="left-r">
        <img src={image1} alt="image1" />
        <img src={image2} alt="image2" />
    
       
    </div>
    <div className="right-r">
        <span>some reasons</span>
        <div>
            <span className='stroke-text'>Why ?</span>
            <span> Choose us !</span>
        </div>
        <div className='details-r'>
        <div><img src={tick} alt=""></img><span>Over 140 experts coachs</span></div>
        <div><img src={tick} alt="" /><span>Train faster and smarter than ever before</span></div>
        <div><img src={tick} alt="" /><span>Free program for new member</span></div>
        <div><img src={tick} alt="" /><span>Reliable partners</span></div>
        </div>
        <span style ={{ color : "var(--gray)", fontWeight : "normal"}}>
            Our partners
        </span>

        <div className="partners">
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Reasons