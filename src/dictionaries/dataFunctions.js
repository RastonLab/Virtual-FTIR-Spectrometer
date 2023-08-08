export function generateAbsorbance(backgroundData, sampleData) {
  const newY = [sampleData.x.length];

  for (let i = 0; i < sampleData.x.length; i++) {
    newY[i] = -1 * Math.log(Math.abs(sampleData.y[i] / backgroundData.y[i]));

    if (newY[i] > 5) {
      newY[i] = 5;
    }

    if (newY[i] < -5) {
      newY[i] = -5;
    }
  }

  return {
      x: sampleData.x,
      y: newY,
  };
}

export function generateTransmittance(backgroundData, sampleData) {
  const newY = [sampleData.x.length];

  for (let i = 0; i < sampleData.x.length; i++) {
      newY[i] = sampleData.y[i] / backgroundData.y[i];

      if (newY[i] > 2) {
      newY[i] = 2;
      }

      if (newY[i] < -2) {
      newY[i] = -2;
      }
  }

  return {
    x: sampleData.x,
    y: newY
  };
}