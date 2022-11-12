import React from 'react'
import styled from "./navbar.module.css"
import {Link} from "react-router-dom";
export default function Navbar() {
  return (
    <div>
    <nav className={`${styled.bg_color} navbar navbar-expand-lg navbar-dark w-100 fixed-top`}>
    <div className="container">
      <a className="navbar-brand" href="/#">Abdallah-Design</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="">Home</Link>
          </li>

          <li className="nav-item">
          <Link className="nav-link" to="gallary">Gallary</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="parent">Parent</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="recipes">Recipes</Link>
    </li>
   
        </ul>
 
      </div>
    </div>
  </nav>
    </div>
  )
}
