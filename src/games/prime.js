#!/usr/bin/env node
import playGame, { getOperand } from '../engine';

const primecheckingStep = 2;
const startPrimeChecking = 3;

const getMaxValueForPrimeChecking = n => Math.round(Math.sqrt(n)) + 1;
const isDividedWithoutRemainder = (n, m) => n % m === 0;

const isPrime = (val) => {
  if (val < 2 || (val % 2 === 0 && val !== 2)) {
    return false;
  }

  const primeIter = (value, i, maxValue) => {
    if (i >= maxValue) {
      return true;
    }

    if (isDividedWithoutRemainder(value, i)) {
      return false;
    }
    return primeIter(value, i + primecheckingStep, maxValue);
  };

  return primeIter(val, startPrimeChecking, getMaxValueForPrimeChecking(val));
};

const primeGame = {
  getGameDescription: () => 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getNextQuestion() {
    const query = {};
    const opA = getOperand();
    const answer = isPrime(opA) ? 'yes' : 'no';
    query.getDescription = () => opA;
    query.checkAnswer = c => c === answer;
    query.getCorrectAnswer = () => answer;
    return query;
  },
};

export default () => playGame(primeGame);
