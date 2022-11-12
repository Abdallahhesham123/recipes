import React from 'react'
import styles from "./gallary.module.css"
import {Link} from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function Gallary() {
  return (
    <div className='container-fluid'>
    <div className="row justify-content-center align-items-center ">
    
    <div className={`${styles.sidebar} col-md-2 vh-100 d-flex justify-content-center align-items-center `}>
    <ul className={`${styles.list}`}>
      <li>
      <Link  to="">Web</Link>
      </li>
      <li>
      <Link  to="labtop">Labtop</Link>
      </li>
    </ul>
    </div>
    <div className="col-md-10">
    <Outlet/>
    
    </div>
    </div>
    
    </div>
  )
}
