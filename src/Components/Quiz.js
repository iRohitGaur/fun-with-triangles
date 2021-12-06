import React, { useState } from "react";

export default function Quiz() {
  const [answered, setAnswered] = useState(new Array());
  const [answeredRight, setAnsweredRight] = useState(new Array());
  const [result, setResult] = useState("");

  var radioUpdate = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (!answeredRight.includes(name) && name === value) {
      setAnsweredRight([...answeredRight, name]);
    } else if (answeredRight.includes(name) && name !== value) {
      setAnsweredRight(answeredRight.filter((e) => e !== name));
    }
    if (!answered.includes(name)) {
      setAnswered([...answered, name]);
    }
  };

  var checkResult = (e) => {
    if (answered.length === qaPairs.length) {
      setResult("Score: " + answeredRight.length + " / " + qaPairs.length);
    } else {
      setResult("Please answer all questions");
    }
  };

  return (
    <div>
      <h1>Quiz on Triangles</h1>
      {qaPairs.map((e) => (
        <div className="tr__qna">
          <div className="tr__questions">{e.question}</div>
          <div className="tr__options">
            {e.options.map((p) => (
              <div className="tr__option__items">
                <input
                  type="radio"
                  name={e.answer}
                  id={p}
                  value={p}
                  onChange={radioUpdate}
                />
                <label
                  className={
                    result !== "" &&
                    result !== "Please answer all questions" &&
                    e.answer === p
                      ? "right__selection"
                      : ""
                  }
                  htmlFor={p}
                >
                  {p}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <input
        type="submit"
        className="tri__items tr__inputname tri__submit"
        value="Check"
        onClick={checkResult}
      />
      <div className="app__resultlabel">{result}</div>
    </div>
  );
}

const qaPairs = [
  {
    question:
      "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°",
    options: ["45°", "90°", "60°"],
    answer: "90°"
  },
  {
    question: "If a triangle has an angle of 90 degrees, what is it caled?",
    options: ["obtuse", "acute", "right angled"],
    answer: "right angled"
  },
  {
    question: "A triangle can have",
    options: ["one right angle", "two right angles"],
    answer: "one right angle"
  },
  {
    question: "Which of the following can form a right angled triangle?",
    options: ["14, 15, 26", "12, 16, 20"],
    answer: "12, 16, 20"
  }
];
