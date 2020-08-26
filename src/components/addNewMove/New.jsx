import React, { Component } from "react";
import "./new-style.scss";

class New extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      link: "",
      category: "0",
      error: "",
      rating: "",
      errorRating: false,
      pramise: "",
    };
  }
  addNewMovie = () => {
    //map check if new movie repeat flag=true 
    let flag = false;
    this.props.movies.map((M, i) => {
     return M.NAME === this.state.name ? flag = true : null;
    });

    //check if input name and link not fill throw error
    if (this.state.name.length === 0 || this.state.link.length === 0) {
      this.setState({ error: "Make sure you fill in all the details." });
    }
    //check if rating percent not between 0 to 100 throw error
     else if (
      Number(this.state.rating) < 0 ||
      Number(this.state.rating) > 100 ||
      this.state.rating.length === 0
    ) {
      this.setState({ errorRating: true });
    } 
    // if new movie repeat throw error
    else if (flag) {
      this.setState({error:"Movie exists"})
    } 
    //send ditails to app-page 
    else {
      this.props.addNewMovie(
        this.state.name,
        this.state.link,
        this.state.category,
        this.state.rating,
        this.state.pramise
      );
      //back to home-page
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <div className="new">
        {/* onclick back home */}
        <i className="fa fa-times" onClick={() => this.props.history.push("/")}></i>
        <br />
        <p>Add New Movie</p>
        {/* fill movie ditails */}
        {/* movie name */}
        <input
          type="text"
          placeholder="Enter movie name"
          onChange={(e) => this.setState({ name: e.target.value, error: "" })}
        />
        <br />
        {/* movie premise */}
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Enter premise"
          onChange={(e) => this.setState({ pramise: e.target.value })}
        ></textarea>
        {/* choose category */}
        <select
          name="categories"
          id="0"
          onChange={(e) => this.setState({ category: e.target.value })}
        >
          {/* map categories list */}
          {this.props.categories.map((C, i) => {
            return (
              <option key={i} value={C.ID}>
                {C.CATEGORY}
              </option>
            );
          })}
        </select>
        <br />
        {/* movie rating - type=number*/}
        <input
          type="number"
          min="0"
          max="100"
          placeholder="Movie rating percentages"
          style={this.state.errorRating ? { border: "1px solid red" } : null}
          onChange={(e) =>
            this.setState({ rating: e.target.value, errorRating: false })
          }
        />
        <br />
        {/* image link */}
        <input
          type="text"
          placeholder="Enter cover image link"
          onChange={(e) => this.setState({ link: e.target.value, error: "" })}
        />
        <br />
        {/* error span */}
        <span>{this.state.error}</span>

        {/*button- onClick go to func addNewMovie */}
        <button onClick={() => this.addNewMovie()}>Done</button>
      </div>
    );
  }
}

export default New;
