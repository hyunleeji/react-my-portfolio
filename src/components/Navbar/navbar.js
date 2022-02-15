import React from 'react'
// import { Link } from 'react-router-dom'
import Menubar from './menubar'
import { render } from "react-dom";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

class Navbar extends React.Component {
constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.state = {
        isScrolling: false
    }
    this.startScroll = this.startScroll.bind(this)
    this.stopScroll = this.stopScroll.bind(this)
}
startScroll(){
    this.setState({
        isScrolling: true
    })
}
stopScroll(){
    this.setState({
        isScrolling: false
    })	
}

componentDidMount() {

    window.addEventListener('scroll', ()=> {
        // if(this.state.isScrolling) {
            if(window.scrollY >= 80 ){
                this.startScroll()
            } else {
                this.stopScroll()
            }
        // }
        
    })

    Events.scrollEvent.register("begin", function () {
    console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
    console.log("end", arguments);
    });
}
scrollToTop() {
    scroll.scrollToTop();
}
// componentWillUnmount(){
//     window.removeEvenetListener('scroll')
// }


render() {
    return (
        <nav> 
            <Element name="test1" className="element">
            {/* <div style={{ top:'20px'}}></div> */}
            <div>
                <div className = {this.state.isScrolling ? 'navbar navactive' : 'navbar'} isScrolling={this.state.isScrolling}>
                    <ul className="navbar-in">
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
                        <li>
                            <a href="/about">about me</a>
                        </li>
                    </ul>
                </div>
                <Menubar />
            </div>
            </Element>
        </nav>
    )
}
}
export default Navbar;
