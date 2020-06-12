import logoImg from "./content/logo_1.png";

const img = document.createElement("img");
img.src = logoImg;

document.getElementById("imgContainer").appendChild(img);

console.log("Esto es una prueba");

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
