import React from 'react';
import styled from 'styled-components';
import Info from './Info';
import PropTypes from 'prop-types';


function InfoList(props) {

  return(
    <div>
    {props.infoList.map((info) => <Info name={info.name} removeName = {props.removeName} id ={info.id} key={info.id}/>)}
    </div>
  )
}

export default InfoList;
