const minNum = 1;
const maxNum = 10;
const numberOfRounds = 3;
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const printResult = (answer, correctAnswer, name) => {
  const correct = 'Correct!';
  const wrong = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Lets try again, ${name}`;
  const isCorrect = answer === correctAnswer;
  return isCorrect ? console.log(correct) : console.log(wrong);
};
export { minNum, maxNum, numberOfRounds };
export { getRandomNum, printResult };
