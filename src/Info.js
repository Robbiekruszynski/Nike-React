import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


function Info(props) {
console.log(props);

function deleteName() {
  props.removeName({
    id:props.id
  })
}

const Button = styled.button`
border: 1px solid red;
`;

  return(
    <div>
    <p>Name: {props.name}</p>
    <Button onClick={deleteName}>Delete</Button>
    </div>
  )
}

export default Info;
