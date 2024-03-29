import runGame from '../index.js';
import getRandomNum from '../utils.js';

const minNum = 1;
const maxNum = 10;
const progressionLength = 10;
const firstNum = getRandomNum(minNum, maxNum);
const stepCount = getRandomNum(minNum, maxNum);
const description = 'What number is missing in the progression?';

const createProgression = (first, step, maxLength) => {
  const result = [];
  for (let i = 0; result.length < maxLength; i += step) {
    result.push(first + i);
  }
  return result;
};

const getMask = (arr, indexNum) => {
  arr.splice(indexNum, 1, '..');
  return arr;
};

const generateData = () => {
  const randomNum = getRandomNum(0, 9);
  const progression = createProgression(firstNum, stepCount, progressionLength);
  const answer = String(progression.splice(randomNum, 1, '..'));
  const question = getMask(progression, randomNum).join(' ');
  return [question, answer];
};

export default () => runGame(description, generateData);
