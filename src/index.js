import readlineSync from 'readline-sync';

const getTheName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${userName}!`);
};

export default getTheName;
