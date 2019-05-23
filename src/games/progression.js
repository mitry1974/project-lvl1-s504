#!/usr/bin/env node
import { game, getRandomInt } from './baseGame';

const roundsCount = 1;
const gameDescription = 'What number is missing in the progression?';
const progressionStep = 2;
const progressionCountMin = 1;
const progressionCountMax = 15;
const progressionStartMin = 1;
const progressionStartMax = 1;

const getProgression = (nFrom, nCount, step) => {
  if (nCount === 0) {
    return [];
  }
  return [nFrom, ...getProgression(nFrom + step, nCount - 1, step)];
};


const getQuery = () => {
  const query = {};
  const progression = getProgression(
    getRandomInt(progressionStartMin, progressionStartMax),
    getRandomInt(progressionCountMin, progressionCountMax),
    progressionStep,
  );
  [query.elem] = progression.splice(getRandomInt(0, progression.length - 1), 1, '..');
  query.progression = progression;
  query.toString = () => query.progression.concat(' ');
  query.check = c => parseInt(c, 10) === query.elem;
  query.getCorrectAnswer = () => query.elem;
  return query;
};

export default game(gameDescription, roundsCount, getQuery);