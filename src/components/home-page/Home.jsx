import React, { Component } from "react";
import "./home-style.scss";
import Movie from "../movieCard/Movie";
import Menu from "../menu-page/Menu";
import Search from "../seach-page/Search";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: false,
    };
  }
  //menu page function. -> open search page with specific category
  openCategory = (ID, CATEGORY) => {
    this.props.openCategory(ID, CATEGORY);
    this.props.history.push("/search");
  };
  render() {
    //sort movies by rating
    let movies = this.props.movies.sort((a, b) => {
      if (a.RATING < b.RATING) return 1;
      if (a.RATING > b.RATING) return -1;
      return 0;
    });
    return (
      <div className="home">
        <div className="picArea">
          {/* pop up menu */}
          {this.state.menu ? (
            <Menu
              categories={this.props.categories}
              closeMenu={() => this.setState({ menu: false })}
              openCategory={this.openCategory}
            />
          ) : null}
           {/* search page icon */}
          <i
            class="fa fa-search"
            id="search"
            onClick={() => this.props.history.push("/search")}
          ></i>
          {/* add new movie icon */}
          <i
            class="fa fa-plus"
            id="plus"
            onClick={() => this.props.history.push("/new")}
          ></i>
          {/* turn on state property -> open menu */}
          <i
            class="fa fa-bars"
            id="menu"
            onClick={() => this.setState({ menu: true })}
          ></i>

          <div className="spaceDiv"></div>
          </div>
          <hr id="hrDesign" />

        <div className="allMovies">
          <p>Top 10 in Israel</p>
          {/* show top 10 from sort array */}
          {movies.map((M, i) => {
            return i < 10 ? (
              <Movie key={i} i={i} IMG={M.IMG} movie={M} top={true} categories={this.props.categories}/>
            ) : null;
          })}
        </div>
      </div>
    );
  }
}

export default Home;
