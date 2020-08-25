import React, { Component } from "react";
import './home-style.scss'
import Movie from "../movieCard/Movie";
import Menu from "../menu-page/Menu";
import Search from "../seach-page/Search";

class Home extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
      menu:false
     }
 }
 openCategory=(ID,CATEGORY)=>{
     this.props.openCategory(ID,CATEGORY)
     this.props.history.push("/search")
 }
  render() {
    let movies=this.props.movies.sort((a,b)=>{if(a.RATING<b.RATING)return 1; if(a.RATING>b.RATING)return -1; return 0;})
    return (
      <div className="home">
           {
             this.state.menu?
             <Menu categories={this.props.categories} closeMenu={()=>this.setState({menu:false})} openCategory={this.openCategory}/>
             :null
           }
           <i class="fa fa-search" id="search" onClick={()=>this.props.history.push("/search")}></i>
           <i class="fa fa-plus" id="plus" onClick={()=>this.props.history.push("/new")}></i>
           <i class="fa fa-bars" id="menu" onClick={()=>this.setState({menu:true})}></i>

           <hr id="hrDesign"/>

           <div className="allMovies">
             <p>Top 10 in Israel</p>
             {
               movies.map((M,i)=>{
                return i<10?<Movie key={i} i={i} IMG={M.IMG} movie={M} top={true}/>:null
               })
             }
             </div>
       </div>
       )
  }
}

export default Home;
