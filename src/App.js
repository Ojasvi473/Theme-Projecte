// src/App.js
import React from "react";
import Header from "./Components/Header";
import TaskManager from "./Components/TaskManager";
import "./App.css";
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="container">
          <TaskManager />
        </div>
      </div>
    </>
  );
}

export default App;
