//This file contains the actions and reducers for pulling the card data

const FETCH_CARDS_WITH_USERS = "FETCH_CARDS_WITH_USERS";
const FETCH_CARDS = "FETCH_CARDS";
const FETCH_USERS = "FETCH_USERS";

//Actions

export function fetchData(itemsWithUsers) {
    return {
        type: FETCH_CARDS_WITH_USERS,
        payload: itemsWithUsers
    };
}

export function fetchCards(cards) {
    return {
        type: FETCH_CARDS,
        payload: cards
    };
}

export function fetchUsers(users) {
    return {
        type: FETCH_USERS,
        payload: users
    };
}

//Helper

export function fetchCardAndUserData() {
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
                dispatch(fetchData(itemsWithUsers));
            })
            .catch(error => console.log(error));
    };
}

export function fetchCardData() {
    return (dispatch) => {
        fetch('http://localhost:3001/items').map(url => (
                fetch(url).then(response => response.json())))
            .then(json => {
                const cards = json;

                dispatch(fetchCards(cards));
            })
    };
}

export function fetchUserData() {
    return (dispatch) => {
        fetch('http://localhost:3001/users').map(url => (
                fetch(url).then(response => response.json())))
            .then(json => {
                const users = json;

                dispatch(fetchUsers(users));
            })
    };
}

//Reducer

const initialState = {
    CardsWithUserData: [],
    loading: true,
    justCardData: [],
    justUserData: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CARDS_WITH_USERS:

            const stateAndData = {
                ...state,
                CardsWithUserData: action.payload,
                loading: false,
            };
            return stateAndData;

        case FETCH_CARDS:

            return {
                ...state,
                justCardData: action.payload
            };

        case FETCH_USERS:

            return {
                ...state,
                justUserData: action.payload
            };

        default:
            return state;
    }
}