import React from 'react';
import styled from 'styled-components';
import pic from '../assets/img/Footer.png';

function LowFooter() {
  const FootImg = styled.img`
  width: 100vw;
  @media only screen and (max-width: 600px){
  display none;
  }
  `;

  const Words = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100vw;

  @media only screen and (max-width: 1000px){
  background: red;
  a{
    color: white;
  }
  border: 1px red solid;
  }
  @media only screen and (max-width:600px){
    display:none;
  }
  `;

  const Group = styled.p`
  display: flex;
  `;

  const A = styled.a`
  text-decoration:none;
  color: grey;

  `;

  const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  `;

  return(
    <div>
      <Words>
      <Wrapper>
        <h4>Icons</h4>
        <Group><A href="https://nike.com">Air Froce 1</A></Group>
        <Group><A href="https://nike.com">Air Max 97</A></Group>
        <Group><A href="https://nike.com">Huarache</A></Group>
        <Group><A href="https://nike.com">VaporMax</A></Group>
      </Wrapper>
      <Wrapper>
        <h4>Shoes</h4>
        <Group><A href="https://nike.com">Jordan Shoes</A></Group>
        <Group><A href="https://nike.com">Running Shoes</A></Group>
        <Group><A href="https://nike.com">Sneakers</A></Group>
        <Group><A href="https://nike.com">Soccor Cleats</A></Group>
      </Wrapper>
      <Wrapper>
        <h4>Kids</h4>
        <p><A href="https://nike.com">Kids Shoes</A></p>
        <p><A href="https://nike.com">Kids Jordan Shoes</A></p>
        <p><A href="https://nike.com">Kids Backpacks</A></p>
        <p><A href="https://nike.com">Kids Socks</A></p>
      </Wrapper>
      <Wrapper>
        <h4>Featured</h4>
        <p><A href="https://nike.com">Leggings</A></p>
        <p><A href="https://nike.com">Jordan Retro</A></p>
        <p><A href="https://nike.com">Windbreakers</A></p>
        <p><A href="https://nike.com">Tracksuits</A></p>
      </Wrapper>
    </Words>
      <FootImg src = { pic }/>
  </div>
  )
}


export default LowFooter;
