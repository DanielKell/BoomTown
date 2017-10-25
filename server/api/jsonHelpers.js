import fetch from 'node-fetch';
import pgClient from './pg-resource.js';

export const getItems = function getItems() {
            // return fetch(`http://localhost:3001/items`)
            // .then(response => response.json())
            // .catch(errors => console.log(errors));

            return pgClient.query('SELECT * FROM items').then(res => res.rows);
            // .then(response => response.json())
            // .catch(errors => console.log(errors));
}


export const getItem = function getItem(id) {
            return fetch(`http://localhost:3001/items/${id}`)
            .then(response => response.json())
            .catch(errors => console.log(errors));
}

export const getUsers = function getUsers() {
        return fetch(`http://localhost:3001/users`)
        .then(response => response.json())
        .catch(errors => console.log(errors));
}

export const getUser = function getUser(id) {
         return fetch(`http://localhost:3001/users/${id}`)
         .then(response => response.json())
         .catch(errors => console.log(errors));
}

// export const getItemOwner = function getItemOwner(items) {
//         if (!items.itemOwner) return null;
//         return fetch(`http://localhost:3001/users/${items.itemOwner}`)
//         .then(response => response.json())
//         .catch(errors => console.log(errors));
// }

// export const getItemBorrower = function getItemBorrower(items) {
//             if (!items.borrower) return null;
//             return fetch(`http://localhost:3001/users/${items.borrower}`)
//             .then(response => response.json())
//             .catch(errors => console.log(errors));
// }

export const getUserItems = function getUserItems(id) {
            if (!id) return null
            return fetch(`http://localhost:3001/items/?itemOwner=${id}`)
            .then(response => response.json())
            .catch(errors => console.log(errors));
}

export const getUserBorrowedItems = function getUserBorrowedItems(id) {
            if (!id) return null
            return fetch(`http://localhost:3001/items/?borrower=${id}`)
            .then(response => response.json())
            .catch(errors => console.log(errors));
}

export const addItemNow = function addItemNow(title, imageUrl, description, itemOwner, tags) {
            const tzOffset = (new Date()).getTimezoneOffset() * 60000; // offset in milliseconds
            const localTime = `${(new Date(Date.now() - tzOffset)).toISOString().slice(0, -1).replace('T', ' ')}-07`;
            const newItem = {
            title: title,
            imageUrl: imageUrl,
            itemOwner: itemOwner,
            description: description,
            tags: tags,
            createdOn: localTime,
            available: true,
            borrower: null
        }
        return fetch('http://localhost:3001/items', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
            }).then(res=>res.json())
            .catch(error => console.log(error))
}