/* eslint-disable default-case */
import produce from 'immer';

const initialState = {
  data: null,
  loading: false,
  error: null
};

const recipesReducer = (state = initialState, action) => 
  produce(state, draft => {
    switch (action.type) {
    case 'GET_RECIPE_DATA':
      draft.isLoading = true;
      break;
    
    case 'GET_RECIPE_DATA_SUCCESS':
      draft.data = action.payload.data;

      draft.isLoading = false;
      break;

    case 'GET_RECIPE_DATA_FAILED':
      draft.error = 'failed to load data';
      break;
    }

    return draft;
  });


export default recipesReducer;