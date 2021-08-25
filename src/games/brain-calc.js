import {
  minNum, maxNum, getRandomNum,
} from '../index.js';

export const gameRules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
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

export const generateData = () => {
  const num1 = getRandomNum(minNum, maxNum);
  const num2 = getRandomNum(minNum, maxNum);
  const randomOperator = operators[getRandomNum(0, operators.length - 1)];
  const question = `${num1} ${randomOperator} ${num2}`;
  const answer = String(getCorrectAnswer(num1, randomOperator, num2));
  return [question, answer];
};
