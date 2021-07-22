import readlineSync from 'readline-sync';
import getName from '../cli.js';
import {
  minNum, maxNum, numberOfRounds, getRandomNum, printResult,
} from '../index.js';

const evenGame = () => {
  const userName = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= numberOfRounds; i += 1) {
    const question = getRandomNum(minNum, maxNum);
    const isEven = question % 2 === 0;
    console.log(`Question: ${question}`);
    const userAnswer = String(readlineSync.question('Your answer: '));
    const getCorrectAnswer = isEven ? 'yes' : 'no';
    printResult(userAnswer, getCorrectAnswer, userName);
  }
  return console.log(`Congratulations, ${userName}!`);
};

evenGame();
export default evenGame;
