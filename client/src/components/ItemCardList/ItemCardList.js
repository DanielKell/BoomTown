import React from 'react';
import ItemCard from '../ItemCard/ItemCard';

const ItemCardList = ({itemCardData}) => {

    return (
        <div>
           { itemCardData.map((item) => (
                <ItemCard 
                    CardAndUserData={item} 
                    key={item.id} 
                />
              )) }
        </div>
    );
}

export default ItemCardList;