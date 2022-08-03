import React from 'react'
import { useRef } from 'react'
import emailjs from "@emailjs/browser"
import "./Join.css"

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_viljlfq', 'template_gf5354b', form.current, 'L-RUTLOvgDsZJpws_')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="Join" id="Joinus">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY</span>
                <span>TO LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US ?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='ENTER YOUR EMAIL ADDRESS' />
                <button  className='btn btn-j'>Join NOW</button>
            </form>
        </div>
    </div>
  )
}

export default Join