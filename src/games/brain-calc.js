import runGame from '../index.js';
import getRandomNum from '../utils.js';

const minNum = 1;
const maxNum = 10;
const operators = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const getCorrectAnswer = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generateData = () => {
  const num1 = getRandomNum(minNum, maxNum);
  const num2 = getRandomNum(minNum, maxNum);
  const randomOperator = operators[getRandomNum(0, operators.length - 1)];
  const question = `${num1} ${randomOperator} ${num2}`;
  const answer = String(getCorrectAnswer(num1, randomOperator, num2));
  return [question, answer];
};

export default () => runGame(description, generateData);
