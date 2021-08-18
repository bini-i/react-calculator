import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import * as styles from "./ButtonPanel.module.css";

function ButtonPanel({ clickHandler }) {
  return (
    <>
      <div className={styles.row}>
        <Button name="AC" clickHandler={clickHandler} />
        <Button name="+/-" clickHandler={clickHandler} />
        <Button name="%" clickHandler={clickHandler} />
        <Button name="÷" color="#F5913E" clickHandler={clickHandler} />
      </div>
      <div className={styles.row}>
        <Button name="7" clickHandler={clickHandler} />
        <Button name="8" clickHandler={clickHandler} />
        <Button name="9" clickHandler={clickHandler} />
        <Button name="x" color="#F5913E" clickHandler={clickHandler} />
      </div>
      <div className={styles.row}>
        <Button name="4" clickHandler={clickHandler} />
        <Button name="5" clickHandler={clickHandler} />
        <Button name="6" clickHandler={clickHandler} />
        <Button name="-" color="#F5913E" clickHandler={clickHandler} />
      </div>
      <div className={styles.row}>
        <Button name="1" clickHandler={clickHandler} />
        <Button name="2" clickHandler={clickHandler} />
        <Button name="3" clickHandler={clickHandler} />
        <Button name="+" color="#F5913E" clickHandler={clickHandler} />
      </div>
      <div className={styles.row}>
        <Button name="0" wide="true" clickHandler={clickHandler} />
        <Button name="." clickHandler={clickHandler} />
        <Button name="=" color="#F5913E" clickHandler={clickHandler} />
      </div>
    </>
  );
}

export default ButtonPanel;

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired
};
