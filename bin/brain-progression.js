#!/usr/bin/env node

import runGame from '../src/index.js';
import { gameRules, generateData } from '../src/games/brain-progression.js';

runGame(gameRules, generateData);
