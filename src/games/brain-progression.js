import {
  minNum, maxNum, getRandomNum,
} from '../index.js';

export const gameRules = 'What number is missing in the progression?';
const numCount = 10;
const createProgression = (maxNumCount) => {
  const firstNum = getRandomNum(minNum, maxNum);
  const count = getRandomNum(minNum, maxNum);
  const result = [];
  for (let i = 0; result.length < maxNumCount; i += count) {
    result.push(firstNum + i);
  }
  return result;
};

const getMask = (arr, indexNum) => {
  arr.splice(indexNum, 1, '..');
  return arr;
};

export const generateData = () => {
  const randomNum = getRandomNum(0, 9);
  const progression = createProgression(numCount);
  const answer = String(progression.splice(randomNum, 1, '..'));
  const question = getMask(progression, randomNum).join(' ');
  return [question, answer];
};
