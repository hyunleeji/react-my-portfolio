import React, { useRef, useState, useEffect } from 'react'
import datas from '../../data/data'
import Projectimg from '../../images/mouseimg.png'
// import Projectmp4 from '../../Video/artbox.mp4'
import Contact from "../Contact/contact"
import { gsap, Power0  } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    Element,
  } from "react-scroll";
import { motion } from "framer-motion" 

gsap.registerPlugin(ScrollTrigger);  

function Project() {

    const refs = useRef(null);
    const revealRefs = useRef([]);
    const projectref = useRef(null);
    revealRefs.current = [];
    let movingref = useRef(null);
    let hashtagref = useRef(null);
    // const [background, setbackground] = useState('#5a7d95')


    // useEffect(() => {

    //     gsap.to(refs.current, {
    //         duration: 1, 
    //         // backgroundColor: background,
    //         backgroundImage: "linear-gradient(#405de6, #5851db, #833ab4)",
    //         ease: 'none',
    //      })

    // }, [background])

    useEffect(() => {
        gsap.to(movingref, {
            scrollTrigger: {
                trigger: movingref,
                start: 'top bottom',
                end: '+=100%',
                scrub:.5,
            },
            x: () => (window.innerWidth)/-1,
            ease: Power0.easeNone
        })
    }, [])

    useEffect(() => {
        gsap.to(hashtagref, {
            scrollTrigger: {
                trigger: hashtagref,
                start: 'top bottom',
                end: '+=100%',
                scrub:.5,
            },
            x: () => (window.innerWidth),
            ease: Power0.easeNone
        })
    }, [])


    // useEffect(() => {
    //     gsap.to(projectref, {
    //         scrollTrigger: {
    //             trigger: projectref,
    //             start: 'top bottom',
    //             end: '+=100%',
    //             scrub:.5,
    //         },
    //         y:100,
    //         ease: Power0.easeNone
    //     })
    // }, [])

    useEffect(() => {
       gsap.from(refs.current, {
           duration: 0.3, 
           autoAlpha:0, 
           y: 100,
           ease: 'none',
           delay: 1
        })

        revealRefs.current.forEach((el, index) => {

            gsap.fromTo(el, {
                autoAlpha: 0
            }, {
                duration: 0.5,
                autoAlpha: 1,
                ease: 'none',
                scrollTrigger: {
                    id:`section-${index+1}`,
                    trigger: el,
                    start: 'top center+=100',
                    toggleActions: 'play none none reverse',
                    // markers: true,
                    // backgroundImage:'linear-gradient(#405de6, #5851db, #833ab4)'
                    // backgroundColor: toggleBackground
                }
            })
        })

    }, [])

    // const toggleBackground = () => {

    //     if(revealRefs.current.index === 1) {
    //         console.log(true)
    //     }

    //     const color = background !== '5a7d95' ? '5a7d95' : '#1b4943'
    //     setbackground(color);
    // }

    // const [state, setState] = useState({
    //     top: 0,
    //     left: 0,
    //   })

    //   useEffect(() => {
    //     setState({
    //       top: gradation.current.getBoundingClientRect().top,
    //       left: gradation.current.getBoundingClientRect().left,
    //     }) 
    //  }, [])

    const addToRefs = (el) => {
        if(el && !revealRefs.current.includes(el)){
            revealRefs.current.push(el);
        }
        console.log(revealRefs.current)
    };

    return (
        <div>
            <div className="projects">
                <div ref={addToRefs}>
                <Element name="test2" className="element">
                <h2 className="title">Project</h2>
                </Element>
                <div className="projectsinfo">
                    <div className="line"></div>
                    <p className="sub">Let me introduce my project!<br/>
                    have a good time!<br/>
                    </p>
                    <div className="line"></div>
                    <img src={Projectimg}/>
                </div>
                </div>
                <p ref={el => {movingref = el}} className="hashtag" >#Artbox Website #Triplus Website #My-portfolio Website </p>
                <p ref={el => {hashtagref = el}} className="twohashtag" >#Frontend developer #Hwang ji hyun</p>
                <div ref={refs}>
                    {datas.map((project, index) => ( 
                        <div className="allprojects" key={index} ref={addToRefs}>
                            <div className="projectback">
                            <div className="projectvideo">
                            <video autoPlay muted loop className="video" width="80%">
                                <source src={project.video} type="video/mp4"/>
                            </video>
                            {/* <video className="video" width="80%" autoplay="true" loop="1" playsinline="">
                                <source src={Projectmp4} type="video/mp4"/>
                            </video> */}
                            {/* <img src={project.image}/> */}
                            </div>
                        </div>
                        <div className="projecttext">
                            <p className="projecttitle">{project.title}</p>
                            <p className="description">{project.description}</p>
                            <p className="review">{project.review}</p>
                            <div className="viewbutton">
                            <button><a href={project.link} target="_blank">View website</a></button>
                            <button><a href={project.github} target="_blank">View github</a></button> 
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project
