import React from "react";

export default function Print() {
  function fullPage() {
    return window.print();
  }

  return (
    <button id="button" onClick={fullPage}>
      Print
    </button>
  );
}
