import React from "react";

function Display({ expression, val }) {
  //   const [a, b] = element;
  //   console.log("a", a);
  //   console.log("b", b);
  //   console.log(typeof element);
  //   console.log(element);
  //   const a = Array.from(element);
  //   console.log(Array.isArray(a));
  //   console.log(a.length);
  return (
    <>
      <b>
        {expression} : {val}
      </b>
      <br />
    </>
  );
}

export default Display;
