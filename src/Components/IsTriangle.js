import React, { useState } from "react";

export default function IsTriangle() {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [value3, setValue3] = useState();
  const [result, setResult] = useState("");

  var checkTriangle = () => {
    const a = Number(value1);
    const b = Number(value2);
    const c = Number(value3);
    if (
      !isNaN(a) &&
      !isNaN(b) &&
      !isNaN(c) &&
      value1 !== "" &&
      value2 !== "" &&
      value3 !== ""
    ) {
      if (a + b + c === 180) {
        setResult("This is a triangle");
      } else {
        setResult("This is not a triangle");
      }
    } else {
      setResult("Please enter all details");
    }
  };

  return (
    <div className="tri">
      <h1>Is Triangle?</h1>
      <input
        className="tri__items tri__inputname tri__input"
        type="number"
        placeholder="Angle 1 (in degrees)"
        onChange={(e) => setValue1(e.target.value)}
      />
      <input
        className="tri__items tri__inputname tri__input"
        type="number"
        placeholder="Angle 2 (in degrees)"
        onChange={(e) => setValue2(e.target.value)}
      />
      <input
        className="tri__items tri__inputname tri__input"
        type="number"
        placeholder="Angle 3 (in degrees)"
        onChange={(e) => setValue3(e.target.value)}
      />
      <input
        type="submit"
        className="tri__items tri__inputname tri__submit"
        value="Check"
        onClick={checkTriangle}
      />
      <div className="app__resultlabel">{result}</div>
    </div>
  );
}
