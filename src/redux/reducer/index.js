import { combineReducers } from "redux";

import recipesReducer from '../reducer/recipesReducer';

export const rootReducer = combineReducers({
    recipesReducer,
});
