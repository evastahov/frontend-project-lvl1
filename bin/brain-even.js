#!/usr/bin/env node

import { runGame } from '../src';
import { gameRules, gameQuestions, correctAnswers } from '../src/games/brain-even.js';

runGame(gameRules, gameQuestions, correctAnswers);
