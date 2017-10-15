import React from 'react';
import Masonry from 'react-masonry-component';
import PropTypes from 'prop-types';

import ItemCard from '../ItemCard';
import './styles.css';

const ItemCardList = ({CardsWithUserData}) => {

    return (
        <Masonry
            className={'masonry-styling'}
            elementType={'ul'}
        >
           { CardsWithUserData.map((item) => (
                <ItemCard 
                    CardsWithUserData={item} 
                    key={item.id} 
                />
              )) }
        </Masonry>
    );
}

ItemCardList.propTypes = {
    CardsWithUserData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ItemCardList;