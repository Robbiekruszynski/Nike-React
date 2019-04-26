import React from 'react';
import styled from 'styled-components';
import pic from '../assets/img/swoosh.png';

function MidNav() {

  const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  height:40px;
  width:15px:
  border:1px solid yellow;
  `;

  const Tag = styled.a`
  margin-right: 15px;
  color: black;
  text-decoration: none;
  `;

  const Img = styled.img`
  display: flex;
  justify-content: flex-start;
  width:50px;
  height:25px;
  `;


  return(
    <div>
      <Box>
      <Img src = { pic }/>
      <Tag href="https://www.nike.com/us/en_us/c/men"><div>NEW RELEASES</div></Tag>
      <Tag href="https://www.nike.com/us/en_us/c/men"><div>MEN</div></Tag>
      <Tag href="https://www.nike.com/us/en_us/c/women"><div>WOMEN</div></Tag>
      <Tag href="https://www.nike.com/us/en_us/c/kids"><div>KIDS</div></Tag>
      <Tag href="https://www.nike.com/us/en_us/c/nikeid"><div>CUSTOMIZE</div></Tag>
      <Img src = { pic }/>

      </Box>
    </div>
  )
}


export default MidNav
