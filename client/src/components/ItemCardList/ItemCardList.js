import React from 'react';
import Masonry from 'react-masonry-component';

import ItemCard from '../ItemCard/ItemCard';
import './styles.css';

const ItemCardList = ({CardsWithUserData}) => {

    return (
        <Masonry
            className={'masonry-styling'}
            elementType={'ul'}
        >
           { CardsWithUserData.map((item) => (
                <ItemCard 
                    CardAndUserData={item} 
                    key={item.id} 
                />
              )) }
        </Masonry>
    );
}

export default ItemCardList;