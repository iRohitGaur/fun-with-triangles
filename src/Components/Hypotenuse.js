import React, { useState } from "react";

export default function Hypotenuse() {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [result, setResult] = useState("");

  var calculateHypotenuse = () => {
    const a = Number(value1);
    const b = Number(value2);
    if (!isNaN(a) && !isNaN(b) && value1 !== "" && value2 !== "") {
      if (a > 0 && b > 0) {
        const sum = a * a + b * b;
        setResult("Length of Hypotenuse: " + Math.sqrt(sum).toFixed(2));
      } else {
        setResult("Invalid input. Length should be greater than zero.");
      }
    } else {
      setResult("Invalid input. Please try again.");
    }
  };

  return (
    <div className="tri">
      <h1>Calculate Hypotenuse</h1>
      <input
        className="tri__items tri__inputname tri__input"
        type="number"
        placeholder="Side 1 length"
        onChange={(e) => setValue1(e.target.value)}
      />
      <input
        className="tri__items tri__inputname tri__input"
        type="number"
        placeholder="Side 2 length"
        onChange={(e) => setValue2(e.target.value)}
      />
      <input
        type="submit"
        className="tri__items tri__inputname tri__submit"
        value="Calculate"
        onClick={calculateHypotenuse}
      />
      <div className="app__resultlabel">{result}</div>
    </div>
  );
}
