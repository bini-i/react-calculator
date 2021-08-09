import React from "react";
import PropTypes from "prop-types";

function Display({ next }) {
  return <span>{String(next)}</span>;
}

export default Display;

Display.propTypes = {
  next: PropTypes.number
};

Display.defaultProps = {
  next: 0
};
