import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Form from "./Form";
import SecurityQuestion from "./SecurityQuestion";
import {Link} from "react-router-dom";

class TopNav extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

  const Box = styled.div`
  display:flex;
  height:30px;
  width:100vw;
  border-bottom: 1px solid lightgrey;
  @media only screen and (max-width: 600px){
    display: flex;

    justify-content: center;
    }
  `;

  const Center = styled.div`
  display: flex;
  justify-content: center;
  `;

  const LeftSide = styled.button`
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100px;
  background-color: white;
  `;

  const RightSide = styled.button`
  display:flex;
  flex-direction:row;
  justify-content: flex-end;
  `;

  const End = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  @media only screen and (max-width: 600px){
    display:none;
    }
  `;
  return(
    <div>
      <Box>
      <LeftSide onClick={this.props.onTextVisible}>Nikeplus</LeftSide>
      <LeftSide onClick={this.props.onTextVisible}>Jordan</LeftSide>
      <LeftSide onClick={this.props.onTextVisible}>Hurley</LeftSide>
      <LeftSide onClick={this.props.onTextVisible}>Converse</LeftSide>
      <Link to='/admin'>Admin</Link>


      <End>
        <RightSide onClick ={this.props.Form}>Join/Login To NikePlusAccount</RightSide>
        <RightSide>Help </RightSide>
        <RightSide>Cart</RightSide>
        <RightSide>Flag</RightSide>
      </End>

      </Box>
    </div>
    );
  }
}

export default TopNav
