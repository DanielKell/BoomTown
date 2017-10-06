import React from 'react';
import ItemCard from '../ItemCard/ItemCard';

const ItemCardList = ({itemCardData}) => {
console.log(itemCardData);
    return (
        <div>
           { itemCardData.map((item) => (
            <ItemCard itemCardData={item} key={item.id} />
        )) }
        </div>
    );
}

export default ItemCardList;