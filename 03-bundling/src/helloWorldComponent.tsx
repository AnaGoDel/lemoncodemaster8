import React from "react";
const classes = require("./helloWorldComponentStyles.scss");

export const HelloWorldComponent: React.FC = () => {
  return (
    <div className={classes.helloText}>
      <span className={classes.resultBackground}>Hello World!</span>
    </div>
  );
};
