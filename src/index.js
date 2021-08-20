import readlineSync from 'readline-sync';

const minNum = 1;
const maxNum = 10;
const numberOfRounds = 3;
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const runGame = (rules, gameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, answer] = gameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correct = 'Correct!';
    const wrong = `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLets try again, ${userName}!`;
    if (userAnswer === answer) {
      console.log(correct);
    } else {
      return console.log(wrong);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default runGame;
export {
  minNum, maxNum, numberOfRounds, getRandomNum,
};
