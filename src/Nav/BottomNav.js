import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';



function BottomNav(props) {
  console.log(props)
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
   @media only screen and (max-width: 1000px){
   background: red;
   color: white;
   }
   `;
  let visibleTextTwo = null;
  let visibleText = null;
    if (props.onTextVisible) {
      if (props.newSale[0]){
        visibleText = <h3> {props.newSale[0].name} How about an EXTRA 45% off</h3>;
      } else {
        visibleText = <h3> You know what!? How about an EXTRA 30% off</h3>;

      }
    } else {
      visibleText = null;
      visibleTextTwo = null;
    }



  return(
    <div>
    <Box>
      <Text>Extra 20% OFF ALL SALE</Text>
    </Box>
    <Sale>
      {visibleText}
      {visibleTextTwo}
    </Sale>
    </div>
  )
}

BottomNav.propTypes = {
  newSale:PropTypes.array
};

export default BottomNav
