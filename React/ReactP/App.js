import React from "react";
import ReactDOM from "react-dom/client";

const container = (
      <div>
        <h1>
          Hello React....
          <br />
        </h1>

        <p>This is a paragraph rendered using React CDN.</p>

        <a href="https://react.dev" target="_blank">
          Learn React Official Site
          <br />
        </a>

        <img
          src="https://reactjs.org/logo-og.png"
          alt="React Logo"
          width="400"
        />
      </div>
);
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(container);