import readlineSync from 'readline-sync';
import getName from '../cli.js';
import {
  minNum, maxNum, numberOfRounds, getRandomNum,
} from '../index.js';

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
  const userName = getName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 1; i <= numberOfRounds; i += 1) {
    const question = getRandomNum(minNum, maxNum);
    console.log(`Question: ${question}`);
    const userAnswer = String(readlineSync.question('Your answer: '));
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
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
export default primeGame;
