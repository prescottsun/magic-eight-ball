import React from "react";
import QuestionForm from "./components/questionForm";
import HistoryLog from "./components/historyLog";

import "./App.css";

function App() {
  return (
    <div className="App">
      <QuestionForm />
      <HistoryLog />
    </div>
  );
}

export default App;
