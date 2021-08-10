import readlineSync from 'readline-sync';
import getName from '../cli.js';
import {
  minNum, maxNum, numberOfRounds, getRandomNum,
} from '../index.js';

const numCount = 10;
const createProgression = (maxNumCount) => {
  const firstNum = getRandomNum(minNum, maxNum);
  const count = getRandomNum(minNum, maxNum);
  const result = [];
  for (let i = 0; result.length < maxNumCount; i += count) {
    result.push(firstNum + i);
  }
  return result;
};
const getMask = (arr, indexNum) => {
  arr.splice(indexNum, 1, '..');
  return arr;
};

const progressionGame = () => {
  const userName = getName();
  console.log('What number is missing in the progression?');
  for (let i = 1; i <= numberOfRounds; i += 1) {
    const randomNum = getRandomNum(0, 9);
    const progression = createProgression(numCount);
    const correctAnswer = String(progression.splice(randomNum, 1, '..'));
    const question = getMask(progression, randomNum).join(' ');
    console.log(`Question: ${question}`);
    const userAnswer = String(readlineSync.question('Your answer: '));
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
export default progressionGame;
