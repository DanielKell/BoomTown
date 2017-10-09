import React from 'react';
import Masonry from 'react-masonry-component';

import ItemCard from '../ItemCard/ItemCard';

const ItemCardList = ({itemCardData}) => {

    return (
        <Masonry
            className={'masonry-styling'}
            elementType={'ul'}
        >
           { itemCardData.map((item) => (
                <ItemCard 
                    CardAndUserData={item} 
                    key={item.id} 
                />
              )) }
        </Masonry>
    );
}

export default ItemCardList;