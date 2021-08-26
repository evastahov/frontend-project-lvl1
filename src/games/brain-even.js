import runGame from '../index.js';
import getRandomNum from '../utils.js';

const minNum = 1;
const maxNum = 10;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateData = () => {
  const question = getRandomNum(minNum, maxNum);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

export default () => runGame(description, generateData);
