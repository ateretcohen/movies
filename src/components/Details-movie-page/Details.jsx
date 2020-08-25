import React, { Component } from "react";
import './Details-style.scss'

class Details extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          
     }
 }

  render() {
    return (
       <div className="Details">
         <div className="container" style={{backgroundImage:"url("+this.props.movie.IMG+")"}}>
          <i class="fa fa-times" onClick={()=> this.props.closePopUp()}></i><br/>

          <div className="buttomPage">
          <p>{this.props.movie.NAME}</p>
          <p className="pramis">{this.props.movie.PRAMISE}</p>
          <div class="progress">
          <div class="progress-bar" role="progressbar" style={{width:String(this.props.movie.RATING)+"%",backgroundColor:"red"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{String(this.props.movie.RATING)+"%     Rating"}</div>
          </div>
          </div>
          
         </div>
          
       </div>
       )
  }
}

export default Details;
