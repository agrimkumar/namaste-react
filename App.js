import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="head">Namaste React using JSX</h1>;
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste React from Functional Component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
