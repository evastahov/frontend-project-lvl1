import readlineSync from 'readline-sync';
import getName from '../cli.js';
import {
  minNum, maxNum, numberOfRounds, getRandomNum,
} from '../index.js';

const evenGame = () => {
  const userName = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= numberOfRounds; i += 1) {
    const question = getRandomNum(minNum, maxNum);
    console.log(`Question: ${question}`);
    const userAnswer = String(readlineSync.question('Your answer: '));
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
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
export default evenGame;
