import React from "react";
import ReactDOM from "react-dom";
import { HelloWorldComponent } from "./helloWorldComponent";
import { DateComponent } from "./dateComponent";

ReactDOM.render(
  <div>
    <HelloWorldComponent />
    <DateComponent />
  </div>,
  document.getElementById("root")
);
