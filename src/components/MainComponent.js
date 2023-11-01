import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import {Routes, Route, Navigate, useParams} from 'react-router-dom';

class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  render(){

    const HomePage = () => {
      return(
        <Home dish={this.state.dishes.filter((dish)=> dish.featured)[0]}
          promotion={this.state.promotions.filter((promo)=> promo.featured)[0]}
          leader={this.state.leaders.filter((leader)=> leader.featured)[0]}
        />
      )
    }

    //Esta funcion usa react Params ver el  param dishId que se creo en la linea 55
    const DishWithId= ()=>{
      //Muestra los parametros que se le pasan al url
      const location=useParams();
      //console.log(location);
      return(
        
        <DishDetail dish={this.state.dishes.filter((dish)=>dish.id === parseInt(location.dishId,10))[0]}
          comments={this.state.comments.filter((comment)=> comment.dishId === parseInt(location.dishId,10))}
        />
      )      
    }

    return (
      <div>
        <Header />
        <Routes>
          <Route path="/home" Component={HomePage}/>
          <Route path="/menu" Component={()=> <Menu dishes={this.state.dishes}/>} />
          <Route path="/menu/:dishId" Component={DishWithId}/>
          <Route path="/contactus" Component={Contact}/>
          <Route path="/aboutus" Component={()=><About leaders={this.state.leaders}/>}/>
          <Route path='*' element={<Navigate to="/home" replace/>} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;
