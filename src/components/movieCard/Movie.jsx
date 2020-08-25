import React, { Component } from "react";
import './movie-style.scss'
import Details from '../Details-movie-page/Details'

class Movie extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
      ditailsMovie:false
     }
 }
 closePopUp=()=>{
   this.setState({ditailsMovie:!this.state.ditailsMovie})
 }
  render() {
    return (
      <div className="movie" onClick={()=>this.closePopUp()}>
            <img  src={this.props.IMG} alt="MOVIE IMG"/>
            {
              this.props.top?
              <div className="top">{this.props.i+1}</div>
              :null
            }
            
            {
              this.state.ditailsMovie?
              <Details movie={this.props.movie} closePopUp={()=>this.closePopUp()}/>
              :null
            }
       </div>
       )
  }
}

export default Movie;
