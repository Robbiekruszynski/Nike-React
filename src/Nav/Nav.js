import React from 'react';
import styled from 'styled-components';
import TopNav from './TopNav';
import MidNav from './MidNav';
import BottomNav from './BottomNav';
import PropTypes from 'prop-types';
import Form from "./Form";


export class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sale: []

    };
    this.handleTextVisible = this.handleTextVisible.bind(this);
    this.test = this.test.bind(this);

  }

  handleTextVisible() {
    this.props.changeVisibility();

  }

  test(props){
    let newSale = this.state.sale.slice();
    newSale.push(props);
    this.setState({sale: newSale})
    console.log(this.state.sale);
  }

  render(){
    const NavStyle = styled.div`
    /* border:1px solid green; */
    `;


  return (
    <div>
    <NavStyle><TopNav onTextVisible={this.handleTextVisible} sendForm = {this.test}/></NavStyle>
    <NavStyle><MidNav/></NavStyle>
    <NavStyle><BottomNav newSale = {this.state.sale} onTextVisible={this.props.textVisibleOnPage}/></NavStyle>
    </div>
    )
  }
}

Nav.propTypes = {
  onTextVisible:PropTypes.bool
};

export default Nav;
