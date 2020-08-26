import React, { Component } from "react";
import './menu-style.scss'

class Menu extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          
     }
 }

  render() {
    return (
       <div className="menu">
        {/* icon close menu page */}
        <i className="fa fa-times" onClick={()=>this.props.closeMenu()}></i>
        <div className="categories">
        <p>Categories</p>    
        <hr/>
        {/* show all categories */}
        {/* onClick= open category movies by function openCategory=() in home page */}
        {
            this.props.categories.map((C,i)=>{
            return <div key={i} onClick={()=>this.props.openCategory(C.ID,C.CATEGORY)}><p className="pCategories">{C.CATEGORY}</p></div>
            })
        }
        </div>
        
       </div>
       )
  }
}

export default Menu;
