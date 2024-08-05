import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const customreactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click to redirect to google"
);

ReactDOM.createRoot(document.getElementById("root")).render(customreactElement);
