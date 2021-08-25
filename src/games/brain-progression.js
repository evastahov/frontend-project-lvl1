import runGame, { getRandomNum } from '../index.js';

const minNum = 1;
const maxNum = 10;

export const description = 'What number is missing in the progression?';
const numCount = 10;
const firstNum = getRandomNum(minNum, maxNum);
const stepCount = getRandomNum(minNum, maxNum);
const createProgression = (first, step, maxNumCount) => {
  const result = [];
  for (let i = 0; result.length < maxNumCount; i += step) {
    result.push(first + i);
  }
  return result;
};

const getMask = (arr, indexNum) => {
  arr.splice(indexNum, 1, '..');
  return arr;
};

export const generateData = () => {
  const randomNum = getRandomNum(0, 9);
  const progression = createProgression(firstNum, stepCount, numCount);
  const answer = String(progression.splice(randomNum, 1, '..'));
  const question = getMask(progression, randomNum).join(' ');
  return [question, answer];
};

export default () => runGame(description, generateData());
