// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/home"
import Loading from "./components/Loading/loading"
import Navbar from "./components/Navbar/navbar"
import Project from "./components/Projects/project"
import Contact from "./components/Contact/contact"
import About from "./components/About/about"
import Cursor from "./util/cursor"
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  return (
    <React.Fragment>
    <Cursor/>
      {loading ? 
        <div className="load">
        <HashLoader 
        color={"#1FDEB9"} 
        loading={loading} 
        size={60} />
        </div>
        :
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/loading">
          <Loading />
        </Route>
        <Route exact path="/project">
          <Project />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
    }
    </React.Fragment>
    )
}

// 안녕하세요 적용이 되어야 하는데...

export default App;