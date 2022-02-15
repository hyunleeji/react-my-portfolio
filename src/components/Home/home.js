import React, {useState, useEffect} from 'react'
import Project from "../Projects/project"
import Contact from "../Contact/contact"
import Navbar from "../Navbar/navbar"
import ClipLoader from "react-spinners/ClipLoader";
// import { ReactComponent as Circleone } from '../../images/svg/circle.svg'
import Circleone from '../../images/svg/circle1.png'
import Circletwo from '../../images/svg/circle2.png'
import { motion } from "framer-motion" 

function Home() {

    return (
        <React.Fragment>
        <Navbar/>
        <section>
            <div>
            <div style={{ height: '100vh', width: '100%', textAlign:'center', position:'relative'}}>
            <motion.div
              initial={{ x: [0, -50 , 0], y: [0, 100 , 0] }}
              exit={{
                visibility: "hidden",
                transition: { delay: 1 },
              }}
              animate={{
                visibility: "visible",
                scale:1.03,
                x: [0, -50 , 0],
                y: [0, 100 , 0]
              }}
              transition={{
                flip: Infinity,
                duration: 15,
                ease: "easeInOut",
            }}
            >
            <img className="figureone" src={Circleone} width="450" height="450" />
            </motion.div>
            <motion.div
              initial={{ x: [0, -50 , 100] }}
              exit={{
                visibility: "hidden",
                transition: { delay: 1 },
              }}
              animate={{
                visibility: "visible",
                scale:1.03,
                x: [0, -50 , 100]
              }}
              transition={{
                flip: Infinity,
                duration: 10,
                ease: "easeInOut",
            }}
            >
            <img className="figuretwo" src={Circletwo} width="200" height="200" />
            </motion.div>
            <motion.div className="homeIn"
              initial={{ opacity:0, y: 0 }}
              exit={{
                visibility: "hidden",
                transition: { delay: 0.5 },
              }}
              animate={{
                visibility: "visible",
                opacity: 1,
                y:-50,
                scale:1.03
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}>
            <h2 className="homeTitle">P O R T F O L I O</h2>
            <h2 className="hometext">Hello, my name is ji hyun hwang. <br/>thank you for visiting my portfolio website.<br/>Hope you’re have a great time.</h2>
            </motion.div>
            </div>
            <Project/>
            <Contact/>
            </div>
        </section> 
        </React.Fragment>
        // }
        // </div>
    )
}

export default Home
