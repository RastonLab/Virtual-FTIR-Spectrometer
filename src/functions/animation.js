export function animateCornerCube() {
  const mcc = document.getElementById("movable-corner-cube");
  const rayTop = document.getElementById("ray-top");
  const rayMiddle = document.getElementById("ray-middle");
  const rayBottom = document.getElementById("ray-bottom");
  const laser = document.getElementById("rect6675");

  if (mcc) {
    // moveable corner cube
    mcc.setAttribute(
      "transform",
      "rotate(135 900.985 1021.051) translate(-800, -800)"
    );

    // top ray
    rayTop.setAttribute(
      "d",
      "m953.417-3217.12 94.391-91.071v1860.955l-94.391 95.49z"
    );

    // middle ray
    rayMiddle.setAttribute("transform", "rotate(90) translate (0, -1130)");

    // bottom ray
    rayBottom.setAttribute(
      "d",
      "m1164.195-3310.854 94.356 95.49v2632.447l-94.356 89.932z"
    );

    // laser
    laser.setAttribute(
      "d",
      "M1406.494 991.284v10H3190.73v209.254H344.494v10H3200.73V991.284Z"
    );

    mcc.addEventListener(
      "transitionend",
      () => {
        // moveable corner cube
        mcc.setAttribute(
          "transform",
          "rotate(135 900.985 1021.051) translate(0, 0)"
        );

        // top ray
        rayTop.setAttribute(
          "d",
          "m953.417-2026.826 94.391-93.734v673.324l-94.391 95.49z"
        );

        // middle ray
        rayMiddle.setAttribute("transform", "rotate(90) translate (0, 0)");

        // bottom ray
        rayBottom.setAttribute(
          "d",
          "m1164.195-2120.56 94.356 93.733v1443.91l-94.356 89.932z"
        );

        // laser
        laser.setAttribute(
          "d",
          "M1406.494 991.284v10h651.235v209.254H344.494v10H2067.73V991.284z"
        );
      },
      { once: true }
    );
  }
}
