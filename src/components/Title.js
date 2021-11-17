import React from "react";

function Title({ title }) {
  return <div>{title ? <h1>{title}</h1> : <span>NO TITLE</span>}</div>;
}

export default Title;

