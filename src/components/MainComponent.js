import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';
import {Routes, Route, Navigate} from 'react-router-dom';

class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES
    };
  }

  render(){

    const HomePage = () => {
      return(
        <Home />
      )
    }
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/home" Component={HomePage}/>
          <Route path="/menu" Component={()=> <Menu dishes={this.state.dishes}/>} />
          <Route path='*' element={<Navigate to="/home" replace/>} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;
