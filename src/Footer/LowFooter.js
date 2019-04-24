import React from 'react';
import styled from 'styled-components';
import pic from '../assets/img/Footer.png';

function LowFooter() {
  const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  `;

  const FootImg = styled.img`
  width: 100%;
  `;

  const Words = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100vw;
  `;

  const Group = styled.p`
  display: flex;
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
        <Group><a href="https://nike.com">Air Froce 1</a></Group>
        <Group><a href="https://nike.com">Air Max 97</a></Group>
        <Group><a href="https://nike.com">Huarache</a></Group>
        <Group><a href="https://nike.com">VaporMax</a></Group>
      </Wrapper>
      <Wrapper>
        <h4>Shoes</h4>
        <Group><a href="https://nike.com">Jordan Shoes</a></Group>
        <Group><a href="https://nike.com">Running Shoes</a></Group>
        <Group><a href="https://nike.com">Sneakers</a></Group>
        <Group><a href="https://nike.com">Soccor Cleats</a></Group>
      </Wrapper>
      <Wrapper>
        <h4>Kids</h4>
        <p><a href="https://nike.com">Kids Shoes</a></p>
        <p><a href="https://nike.com">Kids Jordan Shoes</a></p>
        <p><a href="https://nike.com">Kids Backpacks</a></p>
        <p><a href="https://nike.com">Kids Socks</a></p>
      </Wrapper>
      <Wrapper>
        <h4>Featured</h4>
        <p><a href="https://nike.com">Leggings</a></p>
        <p><a href="https://nike.com">Jordan Retro</a></p>
        <p><a href="https://nike.com">Windbreakers</a></p>
        <p><a href="https://nike.com">Tracksuits</a></p>
      </Wrapper>
    </Words>
    <Footer>
      <FootImg src = { pic }/>
    </Footer>
  </div>
  )
}


export default LowFooter;
