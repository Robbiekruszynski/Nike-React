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
import InfoList from './InfoList'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      sale: [],
    }
    this.test = this.test.bind(this)
    this.removeName = this.removeName.bind(this)
  }
  test(props){
    let newSale = this.state.sale.slice();
    newSale.push(props);
    this.setState({sale: newSale})
  }

  removeName(props){
    let saleArray = this.state.sale
    for ( let i = 0; i < saleArray.length; i++)
    {
    if (props.id === saleArray[i].id){
      saleArray.splice(i,1)
    }
    }
    this.setState({sale: saleArray})
  }

  render(){
    return (
      <div>
        <div><Nav sale={this.state.sale} changeVisibility={this.handleVisibility} textVisibleOnPage={this.state.textVisibleOnPage}/></div>
        <Switch>
          <Route exact path = '/' component = { Contain }/>
          <Route path = '/admin' render={()=><Admin sendForm={this.test} infoList={this.state.sale} removeName={this.removeName}/>}/>
        </Switch>
      </div>

    )
  }
}


export default App;
