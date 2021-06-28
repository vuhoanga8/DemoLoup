import './RecipesItem.scss';

import React from 'react';
import PropTypes from 'prop-types';

const RecipesItem = ({data}) => {

    return (
        <div className='recipe-item col-lg-6 col-sm-12'>
            <div className='recipe-item--image'>
                <img src={data.imageList.landscapewidedesktop1x.url} alt={data.urlPartial}/>
                <p className='recipe-item--title'>{data.title}</p>
            </div>
        </div>
    );
};

RecipesItem.propTypes = {
    data: PropTypes.any
};

export default RecipesItem;