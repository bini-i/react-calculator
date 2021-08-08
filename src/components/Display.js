import React from "react";
import PropTypes from "prop-types";

function Display({ next, total }) {
  return <span>{`${next}     ${total}`}</span>;
}

export default Display;

Display.propTypes = {
  next: PropTypes.string,
  total: PropTypes.string
};

Display.defaultProps = {
  total: "0",
  next: ""
};
