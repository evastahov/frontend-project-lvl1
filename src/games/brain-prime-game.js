import readlineSync from 'readline-sync';
import getName from '../cli.js';
import {
  minNum, maxNum, numberOfRounds, getRandomNum, printResult,
} from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  const userName = getName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 1; i <= numberOfRounds; i += 1) {
    const question = getRandomNum(minNum, maxNum);
    console.log(`Question: ${question}`);
    const userAnswer = String(readlineSync.question('Your answer: '));
    const correctAnswer = isPrime() ? 'yes' : 'no';
    printResult(userAnswer, correctAnswer, userName);
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default primeGame;
