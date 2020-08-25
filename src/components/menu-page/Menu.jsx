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
        <i class="fa fa-times" onClick={()=>this.props.closeMenu()}></i>
        <div className="categories">
        <p>Categories</p>    
        <hr/>
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
