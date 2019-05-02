import React from 'react';
import PropTypes from 'prop-types';

function SecurityQuestion(props){
  let _password = null;

  function submitPassword(event){
    event.preventDefault();
    props.sendPassword({
      password: _password.value
    })
    _password.value=''
  }
  return(
    <div>
      <form onSubmit={submitPassword}>
        <input placeholder="password" type="password" ref={(input) => {_password = input;}}/>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}
SecurityQuestion.propTypes = {
  sendPassword: PropTypes.func
}
export default SecurityQuestion
