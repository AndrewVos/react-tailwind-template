import React from "react";
import ReactDOM from "react-dom";
import image from "../images/network.png";
import "../styles/application.css";

const App = () => {
  return (
    <div className="container mx-auto p-3 min-h-screen flex items-center">
      <div className="w-full lg:w-1/3 border p-10 text-center mx-auto">
        <h1 className="text-4xl mb-5 text-gray-700">Static Site Template</h1>

        <p className="text-lg mb-12 text-gray-500">
          Welcome to Static Site Template.
        </p>

        <div>
          <img href={image} className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
