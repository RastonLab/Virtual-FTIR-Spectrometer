export function animateCornerCube() {
  const mcc = document.getElementById("movable-corner-cube");
  const rayTop = document.getElementById("rect14491-7-9-2-3-5");

  console.log(rayTop);

  if (mcc) {
    mcc.setAttribute(
      "transform",
      "rotate(135 900.985 1021.051) translate(-800, -800)"
    );
    rayTop.setAttribute(
      "d",
      "m 953.417-3200.486 94.391-91.072v1920.323l-94.391 95.491z"
    );

    mcc.addEventListener(
      "transitionend",
      () => {
        mcc.setAttribute(
          "transform",
          "rotate(135 900.985 1021.051) translate(0, 0)"
        );
        rayTop.setAttribute(
          "d",
          "m953.417-2026.826 94.391-91.072v670.662l-94.391 95.49z"
        );
      },
      { once: true }
    );
  }
}
