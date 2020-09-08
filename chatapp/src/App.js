import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Chat from "./Components/Chat";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Login path="/" />
        <Chat path="/chat" />
      </Router>
    </div>
  );
}

export default App;
