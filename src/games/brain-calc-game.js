import readlineSync from 'readline-sync';
import getTheName from '../cli.js';

const minNum = 1;
const maxNum = 100;
const numberOfRounds = 3;
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const operators = ['+', '-', '*'];

const calcGame = () => {
  const userName = getTheName();
  console.log('What is the result of the expression?');
  for (let i = 1; i <= numberOfRounds; i += 1) {
    const num1 = getRandomNum(minNum, maxNum);
    const num2 = getRandomNum(minNum, maxNum);
    const randomOperator = operators[getRandomNum(0, operators.length - 1)];
    const question = `${num1} ${randomOperator} ${num2}`;
    console.log(`Question: ${question}`);
    const answer = Number(readlineSync.question('Your answer: '));
    let correctAnswer = 0;
    if (randomOperator === '+') {
      correctAnswer = num1 + num2;
    }
    if (randomOperator === '-') {
      correctAnswer = num1 - num2;
    }
    if (randomOperator === '*') {
      correctAnswer = num1 * num2;
    }
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Lets try again, ${userName}`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default calcGame;
