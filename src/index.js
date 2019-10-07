import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

let scrollY = 0,
  scrollX = 0;
const $ = document.querySelector.bind(document);

const cursor = document.createElement("div");
cursor.setAttribute("id", "cursor");
$("body").appendChild(cursor);

document.onmousemove = function(e) {
  cursor.style.top = e.pageY - scrollY + "px";
  cursor.style.left = e.pageX - scrollX + "px";
};
document.onscroll = function(e) {
  scrollY = window.pageYOffset;
  scrollX = window.pageXOffset;
};

function clickEffect(e) {
  var d = document.createElement("div");
  d.className = "clickEffect";
  d.style.top = e.clientY + "px";
  d.style.left = e.clientX + "px";
  document.body.appendChild(d);
  d.addEventListener("animationend", function() {
    d.parentElement.removeChild(d);
  });
}

document.addEventListener("click", clickEffect);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
