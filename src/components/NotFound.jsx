import React from "react";

// style
import "../style/components/NotFound.css";

/**
 *  A component that displays text when a Page Not Found (404) error occurs
 */
export default function NotFound() {
  return (
    <div id="not-found">
      <h1>Oh no!</h1>

      <p>It seems like the page you were trying to get to does not exist</p>
    </div>
  );
}
