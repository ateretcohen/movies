import React, { Component } from "react";
import './search-style.scss'
import Movie from "../movieCard/Movie";

class Search extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
        event:""
     }
 }
  goBack=()=>{
    this.props.deleteCategory() 
    this.props.history.push("/")
  }
  render() {
      let movies=this.props.movies.sort((a,b)=>{if(a.NAME>b.NAME)return 1; if(a.NAME<b.NAME)return -1; return 0;})
      .filter(Mov=>(this.state.event===0|| Mov.NAME.indexOf(this.state.event)!=-1))
      
    return (
      <div className="search">
          <div id="topPage">
            <i class="fa fa-chevron-left" onClick={()=>this.goBack()}></i>
            <input type="text" placeholder="search" onChange={(e)=>this.setState({event:e.target.value})}/>
            <br/>
          </div>
         <div id="buttomPage">
           {
             this.props.Category===null?
             null:
           <p id="category">{this.props.Category.CATEGORY}</p>
           }
              {
               movies.map((M,i)=>{
                   return <Movie IMG={M.IMG} movie={M}/>
               }) 
            }
         </div>
           

       </div>
       )
  }
}

export default  Search;
