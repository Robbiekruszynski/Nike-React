import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Nav from './Nav';
import Footer from './Footer';



function App(){

  const Hello = styled.div`
  color:red;

  `;
    return (
      <div>
        <div><Nav/></div>
        <Hello>
          <p>hello</p>
        </Hello>
      </div>

    )
}


export default App;
