import * as React from "react";
import ReactDOM from "react-dom";

function App () {
 return <h1>{'Welcome to rembourser.io staging stuff'}</h1>
}

const mount = document.getElementById("app");
ReactDOM.render(<App />, mount);