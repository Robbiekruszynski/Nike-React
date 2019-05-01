import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import Main from './Main/Main';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

class Contain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textVisibleOnPage: false,
    }

    this.handleVisibility = this.handleVisibility.bind(this);
  }
  handleVisibility() {
    this.setState( prevState => ({
      textVisibleOnPage: !prevState.textVisibleOnPage
    }));
  }

  render() {
    return (
      <div>
        <div><Nav changeVisibility={this.handleVisibility} textVisibleOnPage={this.state.textVisibleOnPage}/></div>
        <div><Main/></div>
        <div><Footer/></div>
      </div>
    );
  }
}


export default Contain;
