import React, { Component } from "react";
import "./App.scss";
import history from "./history";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home-page/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Data from "./moviesList.json";
import Category from "./category.json";
import Search from "./components/seach-page/Search";
import New from "./components/addNewMove/New";

class App extends Component {
  state = {
    movies: Data,
    categories: [],
    Category: null,
  };

  //get data from Json and localStorage
  componentDidMount() {
    // localStorage.clear();

    //get all movies from localStorage
    var allMovies = JSON.parse(localStorage.getItem("allMovies"));
    //set in state array movies
    if (allMovies) {
      this.setState({ movies: allMovies });
    } else {
      this.setState({ movies: Data });
    }

    //get category list from Json to state
    let categoryList = Category;
    this.setState({ categories: categoryList });
  }

  // menu page -> open category in search page
  openCategory = (ID, CATEGORY) => {
    //get category
    let Category = { ID: ID, CATEGORY: CATEGORY };
    //save to state
    this.setState({ Category: Category });
  };

  // add new movie to localStorage
  addNewMovie = (name, link, category, rating, pramise) => {
    let movies = this.state.movies;
   
    //bulid object
    let m = {
      ID: String(this.state.movies.length),
      NAME: name,
      CATEGORY: category,
      RATING: Number(rating),
      IMG: link,
      PRAMISE: pramise,
    };
    //add to state list movies
    movies.push(m);
    this.setState({ movies: movies });


    // save to loacl storage
    localStorage.setItem("singleMovies", JSON.stringify(m));
    localStorage.setItem("allMovies", JSON.stringify(movies));
  };
  render() {
    return (
      <div className="darkApp">
        {
          <Router history={history}>
            <Switch>
              {/* home-page */}
              <Route
                exact
                path={"/"}
                render={(props) => (
                  <Home
                    {...props}
                    movies={this.state.movies}
                    categories={this.state.categories}
                    openCategory={this.openCategory}
                  />
                )}
              />
              {/* search-page */}
              <Route
                exact
                path={"/search"}
                render={(props) => (
                  <Search
                    {...props}
                    movies={
                      this.state.Category == null
                        ? this.state.movies
                        : this.state.movies.filter(
                            (M, i) => M.CATEGORY === this.state.Category.ID
                          )
                    }
                    Category={this.state.Category}
                    categories={this.state.categories}
                    deleteCategory={() => this.setState({ Category: null })}
                  />
                )}
              />
              add-mew-movie-page
              <Route
                exact
                path={"/new"}
                render={(props) => (
                  <New
                    {...props}
                    movies={this.state.movies}
                    categories={this.state.categories}
                    addNewMovie={this.addNewMovie}
                  />
                )}
              />
            </Switch>
          </Router>
        }
      </div>
    );
  }
}

export default App;
