import React from "react";
import PropTypes from "prop-types";

function Display({ result }) {
  return <span>{result}</span>;
}

export default Display;

Display.propTypes = {
  result: PropTypes.string
};

Display.defaultProps = {
  result: "0"
};
