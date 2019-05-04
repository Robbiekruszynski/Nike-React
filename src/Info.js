import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


function Info(props) {
console.log(props);

function deleteName(props) {
  console.log(props.name);
}
  return(
    <div>
    <p>Name: {props.name}</p>
    <button onClick={deleteName}>test button</button>
    </div>
  )
}

export default Info;
