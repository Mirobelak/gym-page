import React from 'react'
import "./hero.css"
import Header from "../Header/Header"
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import {motion} from "framer-motion"
import  NumberCounter from "number-counter"


const Hero = () => {
    const transition = {type: "spring", duration : 3}
    const mobile = window.innerWidth<=768 ? true : false
  return (
    <div className='hero' id='home' >
        <div className="blur hero-blur" ></div>
        <div className='left-h'>
            <Header/>
            <div className="the-best-ad">
            <motion.div
            initial = {{left: mobile?"178px":"238px" }}
            whileInView={{left: "8px"}}
            transition={{...transition, type: "tween"}}
            >

            </motion.div>
            <span>The best Fitness in the town</span>
            </div>
              {/* Hero Heading  */}
              <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div><span>Ideal body</span></div>
                <div><span>In here we will help you to shape and build your ideal body and live up your life to fullest</span></div>
            </div>
            {/* Figure */}
                <div className="figures">
                    <div><span>
                        <NumberCounter end={140} start={100} delay="4" preFix="+"></NumberCounter></span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span><NumberCounter end={900} start={780} delay="4" preFix="+"></NumberCounter></span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span><NumberCounter end={50} start={10} delay="4" preFix="+"></NumberCounter></span>
                        <span>fitness programs</span>
                    </div>
                </div>
                {/* Buttons */}

                <div className="hero-buttons">
                    <button className='btn'>Get started</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
        <div className='right-h'>
            <button className='btn'>Join Now</button>

            <motion.div
            initial = {{right: "-1rem" }}
            whileInView={{right: "4rem"}}
            transition={{...transition, type: "tween"}}
             className="heart-rate">
                <img src={Heart} alt="heart" />
                <span>Heart rate</span>
                <span>120 BPM</span>
            </motion.div>

            {/* Hero images */}

            <img src={hero_image} alt="" className='hero-image' />
            <img src={hero_image_back} alt="" className='hero-image-back' />
        </div>
    </div>
  )
}

export default Hero