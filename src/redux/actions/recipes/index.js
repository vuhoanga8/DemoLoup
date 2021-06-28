import * as recipeType from './recipeType';

export const getRecipeData = (payload) => ({
  type: recipeType.GET_RECIPE_DATA,
  payload,
});

export const getRecipeDataSuccess = (payload) => ({
  type: recipeType.GET_RECIPE_DATA_SUCCESS,
  payload,
});

export const getRecipeDataFailed = (error) => ({
  type: recipeType.GET_RECIPE_DATA_FAILED,
  error
});
