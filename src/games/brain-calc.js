import readlineSync from 'readline-sync';
import getName from '../cli.js';
import {
  minNum, maxNum, numberOfRounds, getRandomNum,
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
    const userAnswer = String(readlineSync.question('Your answer: '));
    let correctAnswer = '';
    if (randomOperator === '+') {
      correctAnswer = String(num1 + num2);
    }
    if (randomOperator === '-') {
      correctAnswer = String(num1 - num2);
    }
    if (randomOperator === '*') {
      correctAnswer = String(num1 * num2);
    }
    const correct = 'Correct!';
    const wrong = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Lets try again, ${userName}`;
    if (userAnswer === correctAnswer) {
      console.log(correct);
    } else {
      return console.log(wrong);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default calcGame;
