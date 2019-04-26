import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


function TopNav(props) {
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
      <LeftSide onClick={props.onTextVisible}>Nikeplus</LeftSide>
      <LeftSide onClick={props.onTextVisible}>Jordan</LeftSide>
      <LeftSide onClick={props.onTextVisible}>Hurley</LeftSide>
      <LeftSide onClick={props.onTextVisible}>Converse</LeftSide>

      <End>
        <RightSide>Join/Login To NikePlusAccount</RightSide>
        <RightSide>Help </RightSide>
        <RightSide>Cart</RightSide>
        <RightSide>Flag</RightSide>
      </End>

      </Box>
    </div>
  )
}

TopNav.propTypes = {
  onTextVisible:PropTypes.func
};

export default TopNav
