import React from 'react';
import styled from 'styled-components';

function MidNav() {

  const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  height:40px;
  width:15px:
  `;

  const Tag = styled.a`
  margin-right: 15px;
  color: black;
  text-declaration: none;

  `;

  return(
    <div>
    <Box>
    <Tag href="https://www.nike.com/us/en_us/c/men"><div>NEW RELEASES</div></Tag>
    <Tag href="https://www.nike.com/us/en_us/c/men"><div>MEN</div></Tag>
    <Tag href="https://www.nike.com/us/en_us/c/women"><div>WOMEN</div></Tag>
    <Tag href="https://www.nike.com/us/en_us/c/kids"><div>KIDS</div></Tag>
    <Tag href="https://www.nike.com/us/en_us/c/nikeid"><div>CUSTOMIZE</div></Tag>
    </Box>
    </div>
  )
}


export default MidNav
