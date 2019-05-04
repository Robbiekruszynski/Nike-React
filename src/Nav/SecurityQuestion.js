import React from 'react';
import PropTypes from 'prop-types';

function SecurityQuestion(props){
  let _password = null;

  // function submitPassword(event){
  //   event.preventDefault();
  //   props.sendPassword({
  //     password: _password.value
  //   })
  //   _password.value=''
  // }
  function yes(event){
    event.preventDefault();
    props.sendPassword(true)
  }
  // <input placeholder="password" type="password" ref={(input) => {_password = input;}}/>
  // <button type="submit">submit</button>
  return(
    <div>
      <form>
        <p>click yes</p>
        <button onClick={yes}>yes</button>
      </form>
    </div>
  )
}
SecurityQuestion.propTypes = {
  sendPassword: PropTypes.func
}
export default SecurityQuestion
