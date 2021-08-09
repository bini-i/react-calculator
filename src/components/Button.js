import React from "react";
import PropTypes from "prop-types";

function Button({ name, clickHandler }) {
  return (
    <button onClick={clickHandler.bind(null, name)} type="button">
      {name}
    </button>
  );
}

export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
};
