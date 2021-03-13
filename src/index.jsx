import React from "react";
import ReactDOM from "react-dom";

const target = document.getElementById("app");

ReactDOM.render(<h1>Hello, world!</h1>, target);

if (import.meta.hot) {
    import.meta.hot.accept();
}
