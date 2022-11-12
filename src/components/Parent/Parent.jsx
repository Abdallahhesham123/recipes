import React, { Component } from 'react'
import Child from '../Child/Child'
import style from "./parent.module.css"
export default class Parent extends Component {

  state={

    products:[
      {id:0 ,name:"dell" , price:300 ,cat:"labtop" ,onSale:true,  image: "./images/img15.jpg" ,},
      {id:1 ,name:"toshiba" , price:320 ,cat:"labtop2" ,onSale:false,image: "./images/img9.jpg" },
      {id:2 ,name:"nokia" , price:500 ,cat:"mobile" ,onSale:true ,image: "./images/img12.jpg" },
      {id:3 ,name:"oppo" , price:600,cat:"tv" ,onSale:false ,image: "./images/img11.jpg" }
    ]
  }

  deleteProduct=(currentIndex)=>{
   let myproduct=[...this.state.products]
   myproduct.splice(currentIndex,1)
   this.setState({products:myproduct})
  }
  updateProduct=(currentIndex)=>{
    let myproduct=[...this.state.products]
    myproduct[currentIndex].price++
    this.setState({products:myproduct})
    
  }
  render() {
    return (

    
      <div className={`${style.body}`}>

      <div className={`${style.container}`}>

      {
        this.state.products.map((ele ,index)=>  <Child  
        update={this.updateProduct}
        productIndex= {index}
         delete= {this.deleteProduct}
          productInfo = {ele}
          key={index}
          
          
          />)
      }
      
      </div>

     
      </div>


    )
  }

}
