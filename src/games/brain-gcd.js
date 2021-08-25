import runGame from '../index.js';
import getRandomNum from '../utils.js';

const minNum = 1;
const maxNum = 10;
const description = 'Find the greatest common divisor of given numbers.';

const greatestComDiv = (num1, num2) => {
  if (num2 > 0) {
    const k = num1 % num2;
    return greatestComDiv(num2, k);
  }
  return Math.abs(num1);
};

const generateData = () => {
  const num1 = getRandomNum(minNum, maxNum);
  const num2 = getRandomNum(minNum, maxNum);
  const question = `${num1} ${num2}`;
  const answer = String(greatestComDiv(num1, num2));
  return [question, answer];
};

export default () => runGame(description, generateData());
