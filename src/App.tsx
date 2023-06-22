import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { Nav } from "./components/Nav";
import { RouteSwitch } from "./components/RouteSwitch";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouteSwitch></RouteSwitch>
      </BrowserRouter>
    </div>
  );
}

export default App;
