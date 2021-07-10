import React from "react";
import PropTypes from "prop-types";

function Button({ name }) {
  return <button type="button">{name}</button>;
}

export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired
};
