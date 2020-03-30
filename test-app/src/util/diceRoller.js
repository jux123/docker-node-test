
export const rollD6 = () => {
  return random(1, 6);
}

export const rollXD6 = (x) => {
  let sum = 0;
  for (let i = 0; i < x; i++) {
      sum += rollD6();
  }

  return sum;
}


const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
