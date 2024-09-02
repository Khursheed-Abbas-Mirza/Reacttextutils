import React from 'react'
import PropTypes from 'prop-types'
import {  useLocation } from 'react-router-dom'

export default function Navbar(props) {
  const location=useLocation();
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary nav-tabs fixed-top' id="navbarToggleExternalContent" style={{backgroundColor:props.mode==="light"?"antiquewhite":"black"}} >
        {/* <div className="container-fluid"> */}
          <span>TextUtils</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
            <span><i className="fa-solid fa-bars-progress" style={{color: "#1801fd"}}></i></span>
          </button>
          <div className="collapse navbar-collapse mx-2" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-5">
              <a className={`nav-link   ${location.pathname === "/" ? "active act" : ""}`} aria-current="page" href="#/">Home</a>
              </li>
              <li className='nav-item'><a className={`nav-link  ${location.pathname === "/about" ? "active act" : ""}`} href="#/about">{props.About}</a></li>
            </ul>
          </div>
          <div className="form-check form-switch">
            <i className={`fa-solid fa-${props.myim}`} onClick={props.togglemode} style={{height:"10px",width:"10px"}}></i>
          </div>
        {/* </div> */}
      </nav>

    </>

  )
}
Navbar.propTypes = { title: PropTypes.string.isRequired, About: PropTypes.string }