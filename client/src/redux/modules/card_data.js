//This file contains the actions and reducers for pulling the card data

const FETCH_DATA = "FETCH_DATA";

//Action

export function fetchingData(itemsWithUsers) {
    return {
        type: FETCH_DATA,
        payload: itemsWithUsers
    };
}

//Helper

export function fetchCardData() {
    return (dispatch) => {
        Promise.all(['http://localhost:3001/items', 'http://localhost:3001/users'].map(url => (
                fetch(url).then(response => response.json()))))
            .then(json => {
                const [item, users] = json;

                const itemsWithUsers = item.map(item => {
                    return {
                        id: item.id,
                        title: item.title,
                        description: item.description,
                        imageUrl: item.imageUrl,
                        tags: item.tags,
                        createdOn: item.createdOn,
                        available: item.available,
                        borrower: item.borrower,
                        user: users.find(user => user.id === item.itemOwner)
                    }
                })
                dispatch(fetchingData(itemsWithUsers));
            })
    };
}

//Reducer

const initialState = {
    itemCardData: [],
    loading: true
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA:

            const stateAndData = {
                itemCardData: action.payload,
                loading: false
            };
            return stateAndData;
    }
    return state;
}