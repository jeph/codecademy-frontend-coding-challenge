import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import CourseCatalog from './components/CourseCatalog';

function App() {
  return (
    <div className="App">
      <h1>Course Catalog</h1>
      <CourseCatalog/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
