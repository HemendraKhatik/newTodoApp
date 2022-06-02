import React from "react";
import "./index.css";

export default function HeroSection(props) {
  return (
    <div className="container">
      <div className="left">Hello from  {props.pageName || "Your page name"} </div>
      <div className="right"> and my name is {props.name || "Your lovely name please"} </div>
    </div>
  );
}
