import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import Main from './Main/Main';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import Contain from './Contain';



function App(){

    return (
      <div>
        <Switch>
          <Route exact path = '/' component = { Contain }/>
        </Switch>
      </div>

    )
}


export default App;
