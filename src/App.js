import React from "react";
import logo from "./logo.svg";
import _ from "lodash";
import faker from "faker";

import "./App.css";
import Atsurabzaid from "../src/imagenes/atsurabzaid_logo_remasterizado_negativo.png";

import SearchExampleStandard from "./Components/Search/search.js";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <div className='contenido'>
        <div className='App-logo-Container'>
          <img src={Atsurabzaid} style={{ height: 200 }} />
        </div>
        <SearchExampleStandard />
      </div>

      <footer className='piedePag'>Footer</footer>
    </div>
  );
}

export default App;
