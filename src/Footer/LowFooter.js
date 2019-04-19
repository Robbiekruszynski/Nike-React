import React from 'react';
import styled from 'styled-components';
import pic from '../assets/img/Footer.png';

function LowFooter() {
  const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  border:1px solid red;
  `;

  const FootImg = styled.img`
  width: 100%;
  `;

  const Words = styled.div`
  display: flex;
  flex-direction: column;
  border:1px solid red;
  width: 10vw;
  `;

  return(
    <div>
    <h4>Icons</h4>
    <Words>
    <p><a href="https://nike.com">Air Froce 1</a></p>
    <p><a href="https://nike.com">Air Max 97</a></p>
    <p><a href="https://nike.com">Huarache</a></p>
    <p><a href="https://nike.com">VaporMax</a></p>

    <h4>Shoes</h4>
    <p><a href="https://nike.com">Jordan Shoes</a></p>
    <p><a href="https://nike.com">Running Shoes</a></p>
    <p><a href="https://nike.com">Sneakers</a></p>
    <p><a href="https://nike.com">Soccor Cleats</a></p>

    <h4>Kids'</h4>
    <p><a href="https://nike.com">Kids' Shoes</a></p>
    <p><a href="https://nike.com">Kids' Jordan Shoes</a></p>
    <p><a href="https://nike.com">Kids' Backpacks</a></p>
    <p><a href="https://nike.com">Kids' Socks</a></p>

    <h4>Featured</h4>
    <p><a href="https://nike.com">Leggings</a></p>
    <p><a href="https://nike.com">Jordan Retro</a></p>
    <p><a href="https://nike.com">Windbreakers</a></p>
    <p><a href="https://nike.com">Tracksuits</a></p>
    </Words>
    <Footer>
      <FootImg src = { pic }/>
    </Footer>
  </div>
  )
}


export default LowFooter;
