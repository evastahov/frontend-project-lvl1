const minNum = 1;
const maxNum = 10;
const numberOfRounds = 3;
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export {
  minNum, maxNum, numberOfRounds, getRandomNum,
};
