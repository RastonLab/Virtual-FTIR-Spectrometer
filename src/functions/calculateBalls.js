/**
 * Function provided by Dr. Raston to calculate the number of red balls that should be present in the application.
 *
 * Test cases provided by Dr. Raston:
 * | Pressure | # of red balls |
 * |----------|----------------|
 * |       10 |             31 |
 * |        1 |             15 |
 * |      0.1 |              7 |
 * |     0.01 |              4 |
 * |    0.001 |              2 |
 * |   0.0001 |              1 |
 *
 * @param {number} pressure - The current value entered by the user.
 * @returns The number of red balls that should be present in the application.
 */
export default function calculateBalls(pressure) {
  return Math.round(Math.pow(pressure, 0.310103) * 15);
}
