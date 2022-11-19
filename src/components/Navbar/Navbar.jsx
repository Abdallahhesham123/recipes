import React ,{useState}from 'react'
import styled from "./navbar.module.css"
import { Link,NavLink} from "react-router-dom";
export default function Navbar() {

  const [NAVBAR, setNAVBAR] = useState(false)

  const ChangeBackGround=()=>{

    // console.log('====================================');
    // console.log(window.scrollY);
    // console.log('====================================');
    if(window.scrollY >= 120){
      setNAVBAR(true)
    }else{
      setNAVBAR(false)
    }
  }
  window.addEventListener("scroll",ChangeBackGround)

  const navBarStyles=({ isActive })=>{
    return{


      color: isActive ? 'black' : '#1ABC9C',
      background: isActive ? '#1ABC9C' : 'transparent',
      borderRadius:isActive ? '15px' : '',
      border:isActive ? '2px solid #fff' : ''
    }
  }
  return (
    <div>
    <nav className={NAVBAR ? `${styled.active} navbar navbar-expand-lg  w-100 fixed-top `: `${styled.navBar} navbar navbar-expand-lg  w-100 fixed-top `}>
    <div className="container">
      <Link className="navbar-brand" to="/">Abdallah-Design</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item mx-2">
            <NavLink className="nav-link active" aria-current="page"
            style={navBarStyles} 
            to="">HOME</NavLink>
          </li>

          <li className="nav-item mx-2">
          <NavLink className="nav-link"
          style={navBarStyles} 
          to="gallary">GALLARY</NavLink>
        </li>
        <li className="nav-item mx-2">
        <NavLink className="nav-link" 
        style={navBarStyles} 
        to="parent">PARENT</NavLink>
      </li>
      <li className="nav-item mx-2">
      <NavLink className="nav-link" 
      style={navBarStyles} 
      to="recipes">RECIPES</NavLink>
    </li>
   
        </ul>
 
      </div>
    </div>
  </nav>
    </div>
  )
}
