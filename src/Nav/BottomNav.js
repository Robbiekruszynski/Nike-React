import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


function BottomNav(props) {

  const Box = styled.div`
  display:flex;
  flex-direction: row;
  background-color: lightgrey;
  height:40px;
  width: 100vw;
  `;

  const Text = styled.h4`
  text-align: center;
  width: 100vw;
  `;

   const Sale = styled.div`
   color:red;
   text-align: center;
   `;

  let visibleText = null;
    if (props.onTextVisible) {
      visibleText = <h3> Secret find! take an EXTRA 35% off</h3>;
    } else {
      visibleText = null;
    }



  return(
    <div>
    <Box>
      <Text>Extra 20% OFF ALL SALE</Text>
    </Box>
    <Sale>
      {visibleText}
    </Sale>

    </div>
  )
}

BottomNav.propTypes = {
  onTextVisible: PropTypes.bool
};

export default BottomNav
