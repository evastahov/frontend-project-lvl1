import {
  minNum, maxNum, getRandomNum,
} from '../index.js';

export const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const generateData = () => {
  const question = getRandomNum(minNum, maxNum);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};
