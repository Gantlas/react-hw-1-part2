import React from "react";
import PropTypes from "prop-types";
import s from "./Tap.module.css";

const Tap = ({ label, clickFcn }) => {
  return (
    <button className={s.btn} onClick={() => clickFcn(label)}>
      {label}
    </button>
  );
};

Tap.propTypes = {
  label: PropTypes.string,
  clickFcn: PropTypes.func,
};

export default Tap;
