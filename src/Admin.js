import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SecurityQuestion from "./Nav/SecurityQuestion";
import Form from "./Nav/Form";

class Admin extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Form: false
    };
    this.checkPassword = this.checkPassword.bind(this);
  }


  checkPassword(input){
    this.setState({Form: input})
  }


  render(){
    let currentState = null;
    if(this.state.Form){
      currentState = <Form sendFormInfo={this.props.sendForm}/>
    } else {
      currentState = <SecurityQuestion sendPassword ={this.checkPassword}/>;
    }
    return(
      <div>
      {currentState}
      </div>
    )
  }
}
Admin.propTypes = {
  sendForm: PropTypes.func
}

export default Admin;
