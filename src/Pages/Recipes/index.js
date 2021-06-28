import './recipe.scss';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {getRecipeData} from '../../redux/actions/recipes';
import RecipesItem from '../../components/RecipesItem';
const Recipes = props => {
    const errorGetData = useSelector((state) => state.recipesReducer.error);
    const isLoading = useSelector((state) => state.recipesReducer.isLoading);
    const recipeData = useSelector((state) => state.recipesReducer.data?.contents || []);

    console.log('get data', recipeData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipeData());
    }, []);
    return recipeData && (
        <div className='recipes-list row'>
            {
                recipeData.map(item => <RecipesItem key={item.contentId} data={item} />)
            }
        </div>
    );
};

Recipes.propTypes = {
    
};

export default Recipes;