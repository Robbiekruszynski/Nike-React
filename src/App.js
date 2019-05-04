import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import Main from './Main/Main';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import Contain from './Contain';
import Admin from './Admin';



class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      sale: [],
    }
    this.test = this.test.bind(this)
  }
  test(props){
    let newSale = this.state.sale.slice();
    newSale.push(props);
    this.setState({sale: newSale})
  }
  render(){
    return (
      <div>
        <div><Nav sale={this.state.sale} changeVisibility={this.handleVisibility} textVisibleOnPage={this.state.textVisibleOnPage}/></div>
        <Switch>
          <Route exact path = '/' component = { Contain }/>
          <Route path = '/admin' render={()=><Admin sendForm={this.test}/>}/>

        </Switch>
      </div>

    )
  }
}


export default App;
