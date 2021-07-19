import readlineSync from 'readline-sync';
import getTheName from '../cli.js';

const minNum = 1;
const maxNum = 10;
const numberOfRounds = 3;
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const createProgression = () => {
  const firstNum = getRandomNum(minNum, maxNum);
  const count = getRandomNum(minNum, maxNum);
  const result = [];
  for (let i = 0; result.length < 10; i += count) {
    result.push(firstNum + i);
  }
  return result;
};
const getMask = (arr, indexNum) => {
  arr.splice(indexNum, 1, '..');
  return arr;
};

const progressionGame = () => {
  const userName = getTheName();
  console.log('What number is missing in the progression?');
  for (let i = 1; i <= numberOfRounds; i += 1) {
    const randomNum = getRandomNum(0, 9);
    const progression = createProgression();
    const correctAnswer = String(progression.splice(randomNum, 1, '..'));
    const question = getMask(progression, randomNum).join(' ');
    console.log(`Question: ${question}`);
    const answer = String(readlineSync.question('Your answer: '));

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Lets try again, ${userName}`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default progressionGame;
