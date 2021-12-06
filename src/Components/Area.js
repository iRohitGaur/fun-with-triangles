import React, { useState } from "react";

export default function Hypotenuse() {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [result, setResult] = useState("");

  var calculateArea = () => {
    const a = Number(value1);
    const b = Number(value2);
    if (!isNaN(a) && !isNaN(b) && value1 !== "" && value2 !== "") {
      setResult("Area of Triangle: " + 0.5 * a * b);
    } else {
      setResult("Please enter all details");
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
        {result !== "" && result !== "Please enter all details" ? (
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
