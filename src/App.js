import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import Main from './Main/Main';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';



function App(){

    return (
      <div>
        <div><Nav/></div>
        <div><Main/></div>
        <div><Footer/></div>
      </div>

    )
}


export default App;
