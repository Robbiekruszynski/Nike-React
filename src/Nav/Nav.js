import React from 'react';
import styled from 'styled-components';
import TopNav from './TopNav';
import MidNav from './MidNav';
import BottomNav from './BottomNav';
import PropTypes from 'prop-types';
import Form from "./Form";
import Admin from '../Admin';


export class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sales: false,
      sale: []
    };
    this.handleTextVisible = this.handleTextVisible.bind(this);
  }

  handleTextVisible() {
    this.setState( prevState => ({
      sales: !prevState.sales
    }));
  }

  render(){
    const NavStyle = styled.div`
    /* border:1px solid green; */
    `;


  return (
    <div>
    <NavStyle><TopNav onTextVisible={this.handleTextVisible} /></NavStyle>
    <NavStyle><MidNav/></NavStyle>
    <NavStyle><BottomNav newSale = {this.props.sale} onTextVisible={this.state.sales}/></NavStyle>
    </div>
    )
  }
}

Nav.propTypes = {
  sale: PropTypes.array
};

export default Nav;
