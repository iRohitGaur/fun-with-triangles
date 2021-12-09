import React, { useState } from "react";

export default function Hypotenuse() {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [result, setResult] = useState("");

  var isValid = false;

  var calculateArea = () => {
    const a = Number(value1);
    const b = Number(value2);
    if (!isNaN(a) && !isNaN(b) && value1 !== "" && value2 !== "") {
      if (a > 0 && b > 0) {
        isValid = true;
        setResult("Area of Triangle: " + 0.5 * a * b);
      } else {
        isValid = false;
        setResult("Invalid input. Value should be greater than zero.");
      }
    } else {
      isValid = false;
      setResult("Invalid input. Please try again.");
    }
  };

  return (
    <div className="tri">
      <h1>Calculate Area of Triangle</h1>
      <div className="app__subtitle">Formula = 1/2(Base x Height)</div>
      <input
        className="tri__items tri__inputname tri__input"
        type="number"
        placeholder="Base (in cm)"
        onChange={(e) => setValue1(e.target.value)}
      />
      <input
        className="tri__items tri__inputname tri__input"
        type="number"
        placeholder="Height (in cm)"
        onChange={(e) => setValue2(e.target.value)}
      />
      <input
        type="submit"
        className="tri__items tri__inputname tri__submit"
        value="Calculate"
        onClick={calculateArea}
      />
      <div className="app__resultlabel">
        {result}
        {isValid ? (
          <>
            cm<sup>2</sup>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
