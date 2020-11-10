/* eslint-disable no-undef */
import React from "react";
import s from "./PropFunctions.module.css";
import Tap from "./Tap/Tap";

const PropFunctions = () => {
  return (
    <div className={s.container}>
      <h1>Prop functions</h1>
      <Tap label="console.log" clickFcn={() => console.log("message")} />
      <Tap label="alert" clickFcn={() => alert("message")} />
      <Tap label="Fcn with param" clickFcn={(p) => alert(p)} />
    </div>
  );
};

export default PropFunctions;
