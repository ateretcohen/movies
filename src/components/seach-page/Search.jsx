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
    //clean Category filter  in search page
    this.props.deleteCategory() 
    this.props.history.push("/")
  }
  render() {
    //sort movies by NAME and filter by search user result
      let movies=this.props.movies.sort((a,b)=>{if(a.NAME>b.NAME)return 1; if(a.NAME<b.NAME)return -1; return 0;})
      .filter(Mov=>(this.state.event===0|| Mov.NAME.indexOf(this.state.event)!==-1))
      
    return (
      <div className="search">
          <div id="topPage">

            <i className="fa fa-chevron-left" onClick={()=>this.goBack()}></i>
            <input type="text" placeholder="search" onChange={(e)=>this.setState({event:e.target.value})}/>
            <br/>
          </div>
         <div id="buttomPage">
           {/* show category if we sort by category (by menu page) */}
           {
             this.props.Category===null?
             null:
           <p id="category">{this.props.Category.CATEGORY}</p>
           }
            {/* map all movies list */}
              {
               movies.map((M,i)=>{
                   return <Movie key={i} IMG={M.IMG} movie={M} categories={this.props.categories}/>
               }) 
            }
         </div>
           

       </div>
       )
  }
}

export default  Search;
