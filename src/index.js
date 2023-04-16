import React from "react";
import ReactDOM from "react-dom";
const hour = new Date().getHours();
const min = new Date().getMinutes();
var wish = "Good Morning";
var headingColor = {
  color: "orange"
};
console.log(hour);
console.log(min);
if (hour > 12 && hour < 18) {
  wish = "Good Afternoon";
  headingColor.color = "yellow";
} else if (hour > 18 && hour < 22) {
  wish = "Good Evening";
  headingColor.color = "blue";
} else if (hour > 22) {
  wish = "Good Night";
  headingColor.color = "black";
}
ReactDOM.render(
  <h1 style={headingColor}> {wish}</h1>,
  document.getElementById("root")
);
