import runGame, { getRandomNum } from '../index.js';

const minNum = 1;
const maxNum = 10;
export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateData = () => {
  const question = getRandomNum(minNum, maxNum);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

export default () => runGame(description, generateData());
