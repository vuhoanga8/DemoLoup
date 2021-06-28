import { ofType } from 'redux-observable';
import { from,of } from 'rxjs';
import { catchError,map,switchMap } from 'rxjs/operators';
import axios from 'axios';
import * as configs from './config';

import * as actions from '../../actions/recipes';
import * as recipeType from '../../actions/recipes/recipeType';

const getRecipeDataEpic = (action$) =>
  action$.pipe(
    ofType(recipeType.GET_RECIPE_DATA),
    switchMap((action) => {
      return from(axios.get('/recipes.json')).pipe(
        map((res) => {
          if (res.status === 200) {
            return actions.getRecipeDataSuccess(res);
          } else {

            return actions.getRecipeDataFailed('Failed');
          }
        }),
        catchError((error) => of(actions.getRecipeDataFailed('Failed')))
      );
    })
  );

export default getRecipeDataEpic; 
