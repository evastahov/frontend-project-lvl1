import {
  minNum, maxNum, getRandomNum,
} from '../index.js';

export const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateData = () => {
  const question = getRandomNum(minNum, maxNum);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};
