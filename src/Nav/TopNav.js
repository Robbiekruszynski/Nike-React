import React from 'react';
import styled from 'styled-components';

function TopNav() {
  const TopNav = styled.div`
  color:grey;
  `;

  const Box = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  border:1px solid grey;
  height:30px;
  width:250px;
  `;

  const Button = styled.button`
  width: 150px;
  `;

  return(
    <div>
      <Box>
      <Button>Nikeplus</Button>
      <Button>Jordan</Button>
      <Button>Hurley</Button>
      <Button>Converse</Button>

      </Box>
    </div>
  )
}

export default TopNav
