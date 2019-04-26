import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


function TopNav(props) {
  const Box = styled.div`
  display:flex;
  height:30px;
  width:100vw;
  border-bottom: 1px solid lightgrey;
  `;

  const LeftSide = styled.button`
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 70px;
  background-color: white;
  `;

  const RightSide = styled.button`
  display:flex;
  flex-direction:row;
  justify-content: flex-end;
  background-color: white;

  `;

  const End = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100vw;

  `;
  return(
    <div>
      <Box>
      <LeftSide onClick={props.onTextVisible}>Nikeplus</LeftSide>
      <LeftSide>Jordan</LeftSide>
      <LeftSide>Hurley</LeftSide>
      <LeftSide>Converse</LeftSide>

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
