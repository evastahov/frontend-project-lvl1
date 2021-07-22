import readlineSync from 'readline-sync';
import getName from '../cli.js';
import { printResult } from '../index';

const minNum = 1;
const maxNum = 100;
const numberOfRounds = 3;
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const operators = ['+', '-', '*'];

const calcGame = () => {
  const userName = getName();
  console.log('What is the result of the expression?');
  for (let i = 1; i <= numberOfRounds; i += 1) {
    const num1 = getRandomNum(minNum, maxNum);
    const num2 = getRandomNum(minNum, maxNum);
    const randomOperator = operators[getRandomNum(0, operators.length - 1)];
    const question = `${num1} ${randomOperator} ${num2}`;
    console.log(`Question: ${question}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    let getCorrectAnswer = 0;
    if (randomOperator === '+') {
      getCorrectAnswer = num1 + num2;
    }
    if (randomOperator === '-') {
      getCorrectAnswer = num1 - num2;
    }
    if (randomOperator === '*') {
      getCorrectAnswer = num1 * num2;
    }
    printResult(userAnswer, getCorrectAnswer, userName);
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default calcGame;
