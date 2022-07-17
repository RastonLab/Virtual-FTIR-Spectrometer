import React from "react";

function fullPage() {
  return window.print();
}

function Print() {
  return (
    <button id="button" onClick={fullPage}>
      Print
    </button>
  );
}

export default Print;
