import React from "react";
import ReactDOM from "react-dom/client";
const conatiner = React.createElement(
            ("div"),{},
            React.createElement(("h1"), {}, " Hello React....", React.createElement("br")),
            React.createElement(("p"), {}, "This is a paragraph rendered using React CDN." ),
            React.createElement(("a"),
                {
                    href: "https://react.dev",
                    target: "_blank"
                },"Learn React Official Site", React.createElement("br")
            ),
            React.createElement(("img"),
                {
                    src: "https://reactjs.org/logo-og.png",
                    alt: "React Logo",
                    width: "400"
                }
            )
        );
        const root =ReactDOM.createRoot(document.getElementById("root"));
        root.render(conatiner);