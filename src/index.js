import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./component/App";
// import StarRating from "./starRating";

function Test() {
  const [movieRating, SetMovieRating] = useState(0);
  return (
    <App />
    // <>
    //   <StarRating color="blue" maxRating={10} onSetRating={SetMovieRating} />;
    //   <p> This movie was rated {movieRating} stars</p>
    // </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating
      maxRating={5}
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <StarRating color="red" />
    <StarRating size={30} color="teal" /> */}

    <Test />
  </React.StrictMode>
);
