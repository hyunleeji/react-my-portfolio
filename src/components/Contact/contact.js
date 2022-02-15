import emailjs from 'emailjs-com';
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    Element,
  } from "react-scroll";
  import { AiOutlineMail } from 'react-icons/ai';

gsap.registerPlugin(ScrollTrigger);  

function Contact() {

    const bottom = useRef(null);

    useEffect(() => {
        gsap.to(
            bottom.current,
          {
            scrollTrigger: {
              trigger: bottom.current,
              start: "top 90%",
              end: "10",
              toggleActions: "play none none reverse",
            //   markers: true,
              scrub: 0.5,
            },
            y: -80,
            opacity: 1,
            color: "#03121f"
          },
          []
        );
      }, []);

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_pqz8nml', 'template_email', e.target, 'user_xmX3MCLUkcUeEXL9nNS5u')
          .then((result) => {
              console.log(result.text);
              alert('전송되었습니다')
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
    

    return (
        <div style={{ textAlign: 'center'}}>
            <div className="subtext" ref={bottom}>
            <p>다양한 색깔을 가진 개발자가 되겠습니다.</p>
            </div>
            <div className="allContact">
            <Element name="test3" className="element">
                <h2 className="contact">contact</h2>
            </Element>
        <div className="contactleft">
            <div className="text">
                <span>Name</span>
                <div>
                    <p>Hwang ji hyun / 황지현</p>
                </div>
                <span>e-mail</span>
                <div>
                    <p>93225@naver.com</p>
                </div>
                <span>skill</span>
                <div>
                    <p>HTML, CSS, JavaScript, React,<br/> Mongodb, Node.js</p>
                </div>
            </div>
            <div className="lines"></div>
            <div className="text">
                <span>Phone number</span>
                <div>
                    <p>010-5671-8808</p>
                </div>
                <span>github</span>
                <div className="github">
                    <p><a href='https://github.com/hyunleeji' target="_blank">https://github.com/hyunleeji</a></p>
                </div>
                <div style={{ margin: '4rem 0'}}>
                <span><a className="moreMe" href="/about">more About me!</a></span>
                </div>
            </div>
        </div>
        </div>
        <div>
        <AiOutlineMail size="40" color="#cac6fa"/>
        <form className="forms" onSubmit={sendEmail}>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' placeholder="이름" id='name' className='bg-blue-900 gradient' required></input>
            <label htmlFor='email'>Email</label>
            <input type="email" placeholder="이메일" name="email"></input>
            <label htmlFor='message'>Message</label>
            <textarea name='message' id='message' cols='25' rows='5' className='bg-blue-900 gradient' required></textarea>
            <div>
            <button className="btn">Send</button>
        </div>
        </form>
        </div>
        </div>
    )
}

export default Contact
