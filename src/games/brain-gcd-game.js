import readlineSync from 'readline-sync';
import getTheName from '../cli.js';

const minNum = 1;
const maxNum = 100;
const numberOfRounds = 3;
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const greatestComDiv = (num1, num2) => {
  if (num2 > 0) {
    const k = num1 % num2;
    return greatestComDiv(num2, k);
  }
  return Math.abs(num1);
};
const gcdGame = () => {
  const userName = getTheName();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= numberOfRounds; i += 1) {
    const num1 = getRandomNum(minNum, maxNum);
    const num2 = getRandomNum(minNum, maxNum);
    const question = `${num1} ${num2}`;
    console.log(`Question: ${question}`);
    const answer = Number(readlineSync.question('Your answer: '));
    const correctAnswer = greatestComDiv(num1, num2);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Lets try again, ${userName}`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default gcdGame;
