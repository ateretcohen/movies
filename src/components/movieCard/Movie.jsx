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
 
 //close movie ditail pop up 
 closePopUp=()=>{
   this.setState({ditailsMovie:!this.state.ditailsMovie})
 }
  render() {
    return (
      <div className="movie" onClick={()=>this.closePopUp()}>
            <img  src={this.props.IMG} alt="MOVIE IMG"/>
            {/* show movie reting 1-10 from 10 top */}
            {
              this.props.top?
              <div className="top">{this.props.i+1}</div>
              :null
            }
            
            {/* onClick open movie ditails- name, category, reting */}
            {
              this.state.ditailsMovie?
              <Details movie={this.props.movie} closePopUp={()=>this.closePopUp()} categories={this.props.categories}/>
              :null
            }
       </div>
       )
  }
}

export default Movie;
