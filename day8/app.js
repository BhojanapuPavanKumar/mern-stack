// {
//   "name": "my-app",
//   "version": "1.0.0",
//   "description": "my-app",
//   "main": "app.js",
//   "scripts": {
//     "test": "npm test"
//   },
//   "keywords": [
//     "ctrl+p"
//   ],
//   "author": "Pavan k",
//   "license": "ISC"
// }

import React from "react";
import ReactDOM from "react-dom/client";
console.log(React);

const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

const App = () => {
  console.log("hello ");
  return (
    <div className="card">
      <h1>Hello from React APP!</h1>
      <h1>Hello from React APP!</h1>
    </div>
  );
};
reactRoot.render(<App />);
