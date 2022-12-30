import React from "react";

// style
import "../style/components/NotFound.css";

// this component is used to display 404 page not found errors
export default function NotFound() {
  return (
    <div id="not-found">
      <h1>Oh no!</h1>

      <p>It seems like the page you were trying to get to does not exist</p>
    </div>
  );
}
