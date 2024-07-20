import React, { useState } from "react";
import Confetti from "react-confetti"; // for continuous confetti
import ConfettiExplosion from "react-confetti-explosion"; // for explosion of confettis
import Header from "./Header";

function Calculator() {
  const [displayexp, setDisplayExpression] = useState(""); //for displaying expression
  const [expression, setExpression] = useState(""); //for using in eval expression
  // const [result, setResult] = useState(0); // calculation of result
  let [toogle_rad, setToogle] = useState(1); //0-> deg 1->rad(initially all values are in rad)
  let [ms, setMs] = useState(0.0); //intially memory store is 0
  // store all expression that are executed
  const [prevCal, setPrevCal] = useState([]);
  const [confeti, setConfeti] = useState(false);
  function handleClick(e) {
    const val = e.target.value;
    if (
      val === "0" ||
      val === "1" ||
      val === "2" ||
      val === "3" ||
      val === "4" ||
      val === "5" ||
      val === "6" ||
      val === "7" ||
      val === "8" ||
      val === "9" ||
      val === "+" ||
      val === "-" ||
      val === "%" ||
      val === "/" ||
      val === "*" ||
      val === "(" ||
      val === ")" ||
      val === "."
    ) {
      setDisplayExpression((prev) => prev + val);
      setExpression((prev) => prev + val);
    } else if (val === "C") {
      setDisplayExpression("");
      setExpression("");
    } else if (
      val === "sin" ||
      val === "cos" ||
      val === "tan" ||
      val === "sinh" ||
      val === "cosh" ||
      val === "tanh"
    ) {
      if (toogle_rad === 0) {
        setDisplayExpression((prev) => prev + val + "(");
        setExpression((prev) => {
          const comp = 180 / Math.PI;
          return prev + "Math." + val + "(" + comp + "*";
        });
      } else {
        setDisplayExpression((prev) => prev + val + "(");
        setExpression((prev) => prev + "Math." + val + "(");
      }
    } else if (val === "e" || val === "pi") {
      if (val === "e") {
        setDisplayExpression((prev) => prev + "e");
        setExpression((prev) => prev + Math.E);
      } else {
        setDisplayExpression((prev) => prev + "pi");
        setExpression((prev) => prev + Math.PI);
      }
    } else if (val === "ln") {
      setDisplayExpression((prev) => prev + val + "(");
      setExpression((prev) => prev + "Math." + "log" + "(");
    } else if (val === "log10") {
      setDisplayExpression((prev) => prev + val + "(");
      setExpression((prev) => prev + "Math." + "log10" + "(");
    } else if (val === "x2") {
      setDisplayExpression((prev) => prev + "^2");
      setExpression((prev) => prev + "**2");
    } else if (val === "x3") {
      setDisplayExpression((prev) => prev + "^3");
      setExpression((prev) => prev + "**3");
    } else if (val === "xy") {
      setDisplayExpression((prev) => prev + "^");
      setExpression((prev) => prev + "**");
    } else if (val === "ex") {
      setDisplayExpression((prev) => prev + Math.E + "^");
      setExpression((prev) => prev + Math.E + "**");
    } else if (val === "10x") {
      setDisplayExpression((prev) => prev + "10" + "^");
      setExpression((prev) => prev + "10" + "**");
    } else if (val === "x^-1" || val === "x^-2" || val === "x^-3") {
      setDisplayExpression((prev) => prev + "^1/" + val.slice(3, 4));
      setExpression((prev) => prev + "**1/" + val.slice(3, 4));
    } else if (val === "x^-y") {
      setDisplayExpression((prev) => prev + "^(1/");
      setExpression((prev) => prev + "**(1/");
    } else if (val === "Rand") {
      const num = Math.random();
      setDisplayExpression((prev) => prev + num);
      setExpression((prev) => prev + num);
    } else if (val === "Rad") {
      setToogle(toogle_rad == 0 ? 1 : 0);
      console.log(toogle_rad);
    } else if (val === "mr") {
      setDisplayExpression("" + ms);
      setExpression("" + ms);
    } else if (val === "mc") {
      setMs(0);
    } else if (val === "m+") {
      const intermediate_val = ms + eval(expression);
      setMs(intermediate_val);
    } else if (val === "m-") {
      const intermediate_val = ms - eval(expression);
      setMs(intermediate_val);
    } else if (val === "+/-") {
      //for change in expression
      let first_occ = -1;
      for (let i = expression.length; i >= 0; i--) {
        if (expression[i] - "0" >= 0 && expression[i] - "0" <= 9) {
          first_occ = i;
          break;
        }
      }
      let j = first_occ;
      if (first_occ !== -1) {
        while (j >= 0) {
          if (expression[j] - "0" >= 0 && expression[j] - "0" <= 9) {
            j--;
          } else {
            break;
          }
        }
        let str = "";
        for (let k = 0; k <= j; k++) {
          str += expression[k];
        }
        str += "-";
        for (let k = j + 1; k < expression.length; k++) {
          str += expression[k];
        }
        setExpression(str);
      }

      //for chnage in display expression
      first_occ = -1;
      for (let i = displayexp.length; i >= 0; i--) {
        if (displayexp[i] - "0" >= 0 && displayexp[i] - "0" <= 9) {
          first_occ = i;
          break;
        }
      }
      if (first_occ !== -1) {
        j = first_occ;
        while (j >= 0) {
          if (displayexp[j] - "0" >= 0 && displayexp[j] - "0" <= 9) {
            j--;
          } else {
            break;
          }
        }
        let str1 = "";
        for (let k = 0; k <= j; k++) {
          str1 += displayexp[k];
        }
        str1 += "-";
        for (let k = j + 1; k < displayexp.length; k++) {
          str1 += displayexp[k];
        }
        setDisplayExpression(str1);
      }
    } else if (val === "EE") {
      setDisplayExpression((prev) => prev + "E");
      setExpression((prev) => prev + "*10" + "**");
    } else if (val === "x!") {
      const fact = cal_fact(eval(expression));

      setDisplayExpression((prev) => prev + "!");
      setExpression(fact);
    }
  }
  function cal_fact(value) {
    let ans = 1;
    if (value < 0 || value % 1 != 0) {
      return NaN;
    }
    if (value === 0) {
      return ans;
    } else {
      for (let i = 1; i <= value; i++) {
        ans = ans * i;
      }
      return ans;
    }
  }
  function handleSubmit() {
    // compute expression
    // display result
    // push the expression in stack
    // put result in expression
    // console.log(eval(expression));
    //check for 5,6 seq
    const obj = { expression: [expression], val: eval(expression) };
    setPrevCal((prev) => [...prev, obj]);

    let isfive = 0;
    let issix = 0;
    for (let i = 0; i < expression.length; i++) {
      if (i === 0) {
        if (expression[i] === "5") {
          if (i + 1 < expression.length) {
            if (expression[i + 1] - "0" >= 0 && expression[i + 1] - "0" <= 9) {
              console.log("haha");
            } else {
              isfive++;
            }
          }
        }

        if (expression[i] === "6") {
          if (i + 1 < expression.length) {
            if (expression[i + 1] - "0" >= 0 && expression[i + 1] - "0" <= 9) {
            } else {
              issix++;
            }
          }
        }
      } else if (i === expression.length - 1) {
        if (expression[i] === "5") {
          if (i - 1 >= 0) {
            if (expression[i - 1] - "0" >= 0 && expression[i - 1] - "0" <= 9) {
            } else {
              isfive++;
            }
          }
        }

        if (expression[i] === "6") {
          if (i - 1 >= 0) {
            if (expression[i - 1] - "0" >= 0 && expression[i - 1] - "0" <= 9) {
            } else {
              issix++;
            }
          }
        }
      } else {
        if (expression[i] === "5") {
          if (i - 1 >= 0) {
            if (expression[i - 1] - "0" >= 0 && expression[i - 1] - "0" <= 9) {
            } else {
              isfive++;
            }
          }
          if (i + 1 < expression.length) {
            if (expression[i + 1] - "0" >= 0 && expression[i + 1] - "0" <= 9) {
            } else {
              isfive++;
            }
          }
        }

        if (expression[i] === "6") {
          if (i - 1 >= 0) {
            if (expression[i - 1] - "0" >= 0 && expression[i - 1] - "0" <= 9) {
            } else {
              issix++;
            }
          }
        }
        if (i + 1 < expression.length) {
          if (expression[i + 1] - "0" >= 0 && expression[i + 1] - "0" <= 9) {
          } else {
            issix++;
          }
        }
      }
    }

    if (isfive > 0 && issix > 0) {
      setConfeti(true);
      isfive = 0;
      issix = 0;
      setTimeout(() => {
        setConfeti(false);
      }, 4000);
    }

    setMs(eval(expression)); //memory store updated on evalution
    // console.log(expression);
    setExpression(eval(expression)); //reset expression to last evaluated
    setDisplayExpression(eval(expression)); // reset display last evaluated expression
  }

  return (
    <>
      <Header prevCal={prevCal} />
      {confeti && <ConfettiExplosion />}
      <div className="container-small">
        <div>
          <input className="screen" type="text" value={displayexp} />
        </div>
        <div>
          <table>
            <tr>
              <td>
                <button value="(" onClick={handleClick}>
                  (
                </button>
              </td>
              <td>
                <button value=")" onClick={handleClick}>
                  )
                </button>
              </td>
              <td>
                <button value="mc" onClick={handleClick}>
                  mc
                </button>
              </td>
              <td>
                <button value="m+" onClick={handleClick}>
                  m+
                </button>
              </td>
              <td>
                <button value="mr" onClick={handleClick}>
                  mr
                </button>
              </td>
              <td>
                <button value="m-" onClick={handleClick}>
                  m-
                </button>
              </td>
              <td>
                <button value="C" onClick={handleClick}>
                  C
                </button>
              </td>
              <td>
                <button value="+/-" onClick={handleClick}>
                  +/-
                </button>
              </td>
              <td>
                <button value="%" onClick={handleClick}>
                  %
                </button>
              </td>
              <td>
                <button className="arithmetic"  value="/" onClick={handleClick}>
                  &divide;
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <button value="2nd" onClick={handleClick}>
                  2nd
                </button>
              </td>
              <td>
                <button value="x2" onClick={handleClick}>
                  x^2
                </button>
              </td>
              <td>
                <button value="x3" onClick={handleClick}>
                  x^3
                </button>
              </td>
              <td>
                <button value="xy" onClick={handleClick}>
                  x^y
                </button>
              </td>
              <td>
                <button value="ex" onClick={handleClick}>
                  e^x
                </button>
              </td>
              <td>
                <button value="10x" onClick={handleClick}>
                  10^x
                </button>
              </td>
              <td>
                <button value="7" onClick={handleClick}>
                  7
                </button>
              </td>
              <td>
                <button value="8" onClick={handleClick}>
                  8
                </button>
              </td>
              <td>
                <button value="9" onClick={handleClick}>
                  9
                </button>
              </td>
              <td>
                <button className="arithmetic" value="*" onClick={handleClick}>
                  &#215;
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <button value="x^-1" onClick={handleClick}>
                  1/x
                </button>
              </td>
              <td>
                <button value="x^-2" onClick={handleClick}>
                  &#8730;x
                </button>
              </td>
              <td>
                <button value="x^-3" onClick={handleClick}>
                  &#8731;x
                </button>
              </td>
              <td>
                <button value="x^-y" onClick={handleClick}>
                  y&#8730;x
                </button>
              </td>
              <td>
                <button value="ln" onClick={handleClick}>
                  ln
                </button>
              </td>
              <td>
                <button value="log10" onClick={handleClick}>
                  log10
                </button>
              </td>
              <td>
                <button value="4" onClick={handleClick}>
                  4
                </button>
              </td>
              <td>
                <button value="5" onClick={handleClick}>
                  5
                </button>
              </td>
              <td>
                <button value="6" onClick={handleClick}>
                  6
                </button>
              </td>
              <td id="yellow">
                <button className="arithmetic"  value="-" onClick={handleClick}>
                  -
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <button value="x!" onClick={handleClick}>
                  x!
                </button>
              </td>
              <td>
                <button value="sin" onClick={handleClick}>
                  sin
                </button>
              </td>
              <td>
                <button value="cos" onClick={handleClick}>
                  cos
                </button>
              </td>
              <td>
                <button value="tan" onClick={handleClick}>
                  tan
                </button>
              </td>
              <td>
                <button value="e" onClick={handleClick}>
                  e
                </button>
              </td>
              <td>
                <button value="EE" onClick={handleClick}>
                  EE
                </button>
              </td>
              <td>
                <button value="1" onClick={handleClick}>
                  1
                </button>
              </td>
              <td>
                <button value="2" onClick={handleClick}>
                  2
                </button>
              </td>
              <td>
                <button value="3" onClick={handleClick}>
                  3
                </button>
              </td>
              <td>
                <button className="arithmetic"  value="+" onClick={handleClick}>
                  +
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <button value="Rad" onClick={handleClick}>
                  Rad
                </button>
              </td>
              <td>
                <button value="sinh" onClick={handleClick}>
                  sinh
                </button>
              </td>
              <td>
                <button value="cosh" onClick={handleClick}>
                  cosh
                </button>
              </td>
              <td>
                <button value="tanh" onClick={handleClick}>
                  tanh
                </button>
              </td>
              <td>
                <button value="pi" onClick={handleClick}>
                  &Pi;
                </button>
              </td>
              <td>
                <button value="Rand" onClick={handleClick}>
                  Rand
                </button>
              </td>
              <td colSpan="2">
                <button value="0" onClick={handleClick}>
                  0
                </button>
              </td>

              <td>
                <button value="." onClick={handleClick}>
                  .
                </button>
              </td>
              <td>
                <button className="arithmetic"  value="=" onClick={handleSubmit}>
                  =
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
export default Calculator;
