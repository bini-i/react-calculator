import React from "react";
import PropTypes from "prop-types";
import * as styles from "./Display.module.css";

function Display({ next }) {
  return <span className={styles.display}>{next}</span>;
}

export default Display;

Display.propTypes = {
  next: PropTypes.string
};

Display.defaultProps = {
  next: 0
};
