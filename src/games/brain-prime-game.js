import readlineSync from 'readline-sync';
import getTheName from '../cli.js';

const minNum = 1;
const maxNum = 100;
const numberOfRounds = 3;
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  const userName = getTheName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 1; i <= numberOfRounds; i += 1) {
    const question = getRandomNum(minNum, maxNum);
    console.log(`Question: ${question}`);
    const answer = String(readlineSync.question('Your answer: '));
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Lets try again, ${userName}`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default primeGame;
