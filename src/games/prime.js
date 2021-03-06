import playGame from '../engine';
import getRandomInt from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (val) => {
  if (val < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(val); i += 1) {
    if (val % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = getRandomInt(1, 100);
  return {
    question,
    answer: isPrime(question) ? 'yes' : 'no',
  };
};

export default () => playGame(gameDescription, generateRound);
