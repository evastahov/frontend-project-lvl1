import readlineSync from 'readline-sync';
import getName from '../cli.js';
import {
  minNum, maxNum, numberOfRounds, getRandomNum, printResult,
} from '../index.js';

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
    const userAnswer = readlineSync.question('Your answer: ');
    let correctAnswer = '';
    if (randomOperator === '+') {
      correctAnswer = num1 + num2;
    }
    if (randomOperator === '-') {
      correctAnswer = num1 - num2;
    }
    if (randomOperator === '*') {
      correctAnswer = num1 * num2;
    }
    printResult(userAnswer, correctAnswer, userName);
  }
  return console.log(`Congratulations, ${userName}!`);
};

calcGame();
export default calcGame;
