import React,{ useCallback, useEffect, useState } from 'react'
import Mouse from '../images/mouseimg.png'
import Mousehook from "./mousehook"
import { motion } from 'framer-motion'
// import gsap from "gsap";


function Cursor({}) {

  const [cursorHovered, setCursorHovered] = useState(true)
  
  const { x, y } = Mousehook()


    return (
      <>
      <motion.div
      animate={{
        x: x + 150,
        y: y + 20,
        scale: cursorHovered ? 1.2 : 1,
        position: 'relative',
        zIndex:999
      }}
      transition={{
        ease: "linear",
        duration: 0.2,
      }}
      className="cursor"
    >
    <img src={Mouse} style={{ zIndex:'999' }} className="game" width="60" height="60" />
    </motion.div>
    </>
    )
}

export default Cursor
