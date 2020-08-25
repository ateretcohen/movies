import React, { Component } from "react";
import './new-style.scss'

class New extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
        name:"",
        link:"",
        category:"0",
        error:"",
        rating:"",
        errorRating:false,
        pramise:""
     }
 }
 addNewMovie=()=>{
    if(this.state.name.length==0 && this.state.link.length==0) 
    {
            this.setState({error:"Make sure you fill in all the details."})
    }
    else if(Number(this.state.rating)<0||Number(this.state.rating)>100||this.state.rating.length==0)
    {
      this.setState({errorRating:true})
    }
    else
    {
      this.props.addNewMovie(this.state.name,this.state.link,this.state.category,this.state.rating,this.state.pramise)
      this.props.history.push("/")
    }
 }
  render() {
    return (
      <div className="new">
            <i class="fa fa-chevron-left" onClick={()=>this.props.history.push("/")}></i><br/>
            <p>Add New Movie</p>
            <input type="text" placeholder="Enter movie name" onChange={(e)=>this.setState({name:e.target.value,error:""})}/><br/>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter premise" onChange={(e)=>this.setState({pramise:e.target.value})}></textarea>
            <select name="categories" id="0" onChange={(e)=>this.setState({category:e.target.value})}>
               {
                 this.props.categories.map((C,i)=>{
                 return <option key={i} value={C.ID}>{C.CATEGORY}</option>
                 })
               }
            </select><br/>
            <input type="number" min="0" max="100" placeholder="Movie rating percentages" 
            style={this.state.errorRating?{border:"1px solid red"}:null}
            onChange={(e)=>this.setState({rating:e.target.value,errorRating:false})}/>
            <br/>
            <input type="text" placeholder="Enter cover image link" onChange={(e)=>this.setState({link:e.target.value,error:""})}/><br/>
              <span>{this.state.error}</span>
            <button onClick={()=>this.addNewMovie()}>Done</button>
       </div>
       )
  }
}

export default New;
