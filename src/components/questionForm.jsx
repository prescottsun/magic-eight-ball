import React, { useState, useEffect } from "react";
// import { loadData } from "../utils/loadData";

const QuestionForm = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("Ask a question");
  const [history, setHistory] = useState([]);

  const getAnswer = async question => {
    console.log("question is ", question);
    const params = encodeURIComponent(question);
    let uri = "https://8ball.delegator.com/magic/JSON/" + params;

    fetch(uri)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setAnswer(json.magic.answer);
        setHistory([
          {
            question: json.magic.question,
            answer: json.magic.answer
          },
          ...history
        ]);
      });
  };

  const handleChange = e => {
    setQuestion(e.target.value);
    // console.log(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    getAnswer(question);
    setQuestion("");
  };

  //   useEffect(() => {
  //     getAnswer();
  //   }, [question]);

  return (
    <div>
      <h1>Magic Eight Ball</h1>

      <form onSubmit={handleSubmit}>
        <label>Question</label>
        <input
          type="text"
          name="question"
          value={question}
          onChange={handleChange}
          placeholder="Enter a question"
        />
        <input type="submit" value="Submit" />
      </form>
      <h3>Answer: {answer}</h3>

      <h2>History Log</h2>
      <ul>
        {history.map(entry => {
          return (
            <li>
              Question: {entry.question} <br />
              Answer: {entry.answer}
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuestionForm;
