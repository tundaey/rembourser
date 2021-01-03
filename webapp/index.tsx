import * as React from "react";
import ReactDOM from "react-dom";

function App () {
 return <h1>This is my amazing app</h1>
}

const mount = document.getElementById("app");
ReactDOM.render(<App />, mount);