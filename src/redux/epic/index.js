import { combineEpics } from 'redux-observable';

import getRecipeDataEpic from './recipes';

export const rootEpic = combineEpics(
    getRecipeDataEpic
);
