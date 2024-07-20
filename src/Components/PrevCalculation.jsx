import React from "react";
import Display from "./Display";
function PrevCalculation({ prevCal }) {
  // console.log("p");
  // prevCal.map((ele) => {
  //   console.log(ele);
  // });
  return (
    <>
      <h2>Expression : Result</h2>
      {prevCal.map((element) => {
        // console.log(element);
        return <Display {...element} />;
      })}
    </>
  );
}

export default PrevCalculation;
