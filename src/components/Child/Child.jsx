import React, { Component } from 'react'
import style from "./chile.module.css"
export default class Child extends Component {
  render() {
    let{name ,price,cat,onSale ,image} = this.props.productInfo
    return (
      <>

      <div className={`${style.box}`} >
      <span></span>
   
      <div className={`${style.content}`}>
      { onSale? <p className={`${style.onsale}`}> on-Sall</p> : <p className={`${style.offsale}`}>outoff-Sall</p>} 
      <img src={image} alt="" className='w-100'/>
          <h2>{name}</h2>
          <p >Price : {price} $</p>
          <p className={`${style.last}`}>Category :{ cat}</p>
          <div className="button ">
          <button className='btn btn-outline-danger mx-4 text-white' onClick={()=>this.props.delete(this.props.productIndex)}>Delete</button>
          <button className='btn btn-outline-warning mx-2 text-white' onClick={()=>this.props.update(this.props.productIndex)}>Update</button>
          </div>

             
      </div>
  </div>
   



      </>
    )
  }
}
