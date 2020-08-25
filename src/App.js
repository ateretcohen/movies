import React, { Component } from "react";
import './App.scss';
import history from './history';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home-page/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Data from "./moviesList.json"
import Category from "./category.json"
import Search from "./components/seach-page/Search";
import New from "./components/addNewMove/New";


class App extends Component {
  state = {
   movies:[],
   categories:[],
   Category:null
  };
  componentDidMount() {
   let movies=[]
   Data.map(M=>{
    movies.push({
     ID:M.ID,
     NAME:M.NAME,
     CATEGORY:M.CATEGORY,
     RATING:M.RATING,
     IMG:M.IMG,
     PRAMISE:M.PRAMISE
    })
   })
   this.setState({movies:movies})
   
   let categoryList=[];
   Category.map(C=>{
    categoryList.push({
      ID:C.ID,
      CATEGORY:C.CATEGORY
      })
    })
    this.setState({categories:categoryList})

  }
  openCategory=(ID,CATEGORY)=>{
    let Category={ID:ID,CATEGORY:CATEGORY}
    this.setState({Category:Category})
  }
  addNewMovie=(name,link,category,rating,pramise)=>{
    let movies=this.state.movies;
    let m={
     ID:String(this.state.movies.length),
     NAME:name,
     CATEGORY:category,
     RATING:Number(rating),
     IMG:link,
     PRAMISE:pramise
    }
    movies.push(m)
    this.setState({movies:movies})
    console.log(this.state.movies);
  }
  render() {
    return (
      <div className="darkApp">
        {
          <Router history={history}>
          <Switch>
          <Route exact path={"/"} render={(props) => <Home {...props} movies={this.state.movies} categories={this.state.categories} openCategory={this.openCategory}/>}/>
          <Route exact path={"/search"} render={(props) => <Search {...props} movies={this.state.Category==null?this.state.movies:this.state.movies.filter((M,i)=>M.CATEGORY===this.state.Category.ID)} Category={this.state.Category} deleteCategory={()=>this.setState({Category:null})}/> }/>
          <Route exact path={"/new"} render={(props) => <New {...props} categories={this.state.categories} addNewMovie={this.addNewMovie}/>}/>
          </Switch>
          </Router>
        } 
      </div>
    );
  }
}

export default App;