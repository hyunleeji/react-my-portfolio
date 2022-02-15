import React, { useState } from 'react'
import {
    Link,
    animateScroll as scroll,
  } from "react-scroll";


function Menubar() {

    const [Toggle, setToggle] = useState(false)

    const navToggle = () => {
        setToggle(!Toggle)
    }

    // window.addEventListener('click', navToggle);

    return (
        <div className={Toggle ?  'menubaropen' : 'menubar'}>
            <div className={Toggle ?  'menutoggle' : 'menu'} >
                <ul className={Toggle ?  'toggle' : 'togglenone'}>
                    <li>
                    <Link
                    activeClass="active"
                    className="test1"
                    to="test1"
                    spy={true}
                    smooth={true}
                    duration={500}
                    >
                    home
                    </Link>
                    </li>
                    <li>
                    <Link
                    activeClass="active"
                    className="test2"
                    to="test2"
                    spy={true}
                    smooth={true}
                    duration={500}
                    >
                    project
                    </Link>
                    </li>
                    <li>
                    <Link
                    activeClass="active"
                    className="test3"
                    to="test3"
                    spy={true}
                    smooth={true}
                    duration={500}
                    >
                    contact
                    </Link>
                    </li>
                    <li><a href="/about">about me</a></li>
                </ul>
            </div>
            <div className="leftmenu" onClick={navToggle}>
                <div className="hamburger-menu">
                    <span></span>
                    <span></span>
                </div>
                </div>
        </div>
    )
}

export default Menubar
