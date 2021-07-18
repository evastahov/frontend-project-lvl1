import readlineSync from 'readline-sync';
import getTheName from '../cli.js';

const minNum = 1;
const maxNum = 1000;
const numberOfRounds = 3;
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const evenGame = () => {
  const userName = getTheName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= numberOfRounds; i += 1) {
    const question = getRandomNum(minNum, maxNum);
    const isEven = question % 2 === 0;
    console.log(`Question: ${question}`);
    const answer = String(readlineSync.question('Your answer: '));
    const correctAnswer = isEven ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Lets try again, ${userName}`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default evenGame;
