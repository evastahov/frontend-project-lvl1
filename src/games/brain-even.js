import {
  minNum, maxNum, numberOfRounds, getRandomNum,
} from '../index.js';

const generateQuestions = (count) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    result.push(getRandomNum(minNum, maxNum));
  }
  return result;
};

const generateCorrectAnswers = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      result.push('yes');
    } else {
      result.push('no');
    }
  }
  return result;
};

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameQuestions = generateQuestions(numberOfRounds);
const correctAnswers = generateCorrectAnswers(gameQuestions);

export {
  gameRules, gameQuestions, correctAnswers,
};
