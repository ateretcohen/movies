import React, { Component } from "react";
import './Details-style.scss'

class Details extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          
     }
 }

  render() {
      const category=this.props.categories.filter(C=>C.ID==this.props.movie.CATEGORY);
    return (
      <div className="Details">
        <div
          className="container"
          style={{ backgroundImage: "url(" + this.props.movie.IMG + ")" }}
        >
          {/* onClick close movie ditail page */}
          <i class="fa fa-times" onClick={() => this.props.closePopUp()}></i>
          <br />

          <div className="buttomPage">
            <span className="name">{this.props.movie.NAME}</span><br/>
           <span className="pramis">{category[0].CATEGORY}</span>
            <p className="pramis">{this.props.movie.PRAMISE}</p>

            {/* reting by percent- bootstrap*/}
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{
                  width: String(this.props.movie.RATING) + "%",
                  backgroundColor: "red",
                }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
              {String(this.props.movie.RATING) + "%     Rating"}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
