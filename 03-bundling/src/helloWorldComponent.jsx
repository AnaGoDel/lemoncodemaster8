import React from "react";
const classes = require("./helloWorldComponentStyles.scss");

export const HelloWorldComponent = () => {
  return (
    <div>
      <span className={classes.resultBackground}>Hello World!</span>
    </div>
  );
};
