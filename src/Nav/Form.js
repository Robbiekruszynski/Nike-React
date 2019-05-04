import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function Form (props) {
  let _name = null;
  function submitForm(event) {
    event.preventDefault();
    props.sendFormInfo ({
      name:_name.value,
      id: v4()
    });
    _name.value = ' '
  }
  return (
    <div>
      <form onSubmit={submitForm}>
      <input
      type = 'text'
      id = 'name'
      placeholder= 'Your Name'
      ref={(input) => {_name = input;}}/>

      <button type="submit">Submit</button>
       </form>
    </div>
  );
}

Form.propTypes = {
  sendFormInfo: PropTypes.func

}

export default Form;
