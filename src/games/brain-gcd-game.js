import readlineSync from 'readline-sync';
import getName from '../cli.js';
import {
  minNum, maxNum, numberOfRounds, getRandomNum, printResult,
} from '../index.js';

const greatestComDiv = (num1, num2) => {
  if (num2 > 0) {
    const k = num1 % num2;
    return greatestComDiv(num2, k);
  }
  return Math.abs(num1);
};
const gcdGame = () => {
  const userName = getName();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= numberOfRounds; i += 1) {
    const num1 = getRandomNum(minNum, maxNum);
    const num2 = getRandomNum(minNum, maxNum);
    const question = `${num1} ${num2}`;
    console.log(`Question: ${question}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    const correctAnswer = greatestComDiv(num1, num2);
    printResult(userAnswer, correctAnswer, userName);
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default gcdGame;
