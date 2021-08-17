import React from "react";
import PropTypes from "prop-types";
import * as styles from "./Button.module.css";

function Button({ name, color, wide, clickHandler }) {
  return (
    <button
      onClick={clickHandler.bind(null, name)}
      type="button"
      style={{ backgroundColor: color, width: wide ? "50%" : "25%" }}
      className={styles.button}
    >
      {name}
    </button>
  );
}

export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string,
  wide: PropTypes.string
};

Button.defaultProps = {
  color: "#E0E0E0",
  wide: false
};
