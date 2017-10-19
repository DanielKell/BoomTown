import fetch from 'node-fetch';

const resolveFunctions = {
    Query: {
        items() {
            return fetch(`http://localhost:3001/items`)
            .then(response => response.json())
            .catch(errors => console.log(errors));
        },
        item(root, { id }) {
         return fetch(`http://localhost:3001/items/${id}`)
         .then(response => response.json())
         .catch(errors => console.log(errors));
        },
        users() {
            return fetch(`http://localhost:3001/users`)
            .then(response => response.json())
            .catch(errors => console.log(errors));
        },
        user(root, { id }) {
         return fetch(`http://localhost:3001/users/${id}`)
         .then(response => response.json())
         .catch(errors => console.log(errors));
        }
    },
    Item: {
        itemOwner(items) {
            return fetch(`http://localhost:3001/users/${items.itemOwner}`)
            .then(response => response.json())
            .catch(errors => console.log(errors));
        },
        borrower(items) {
            return fetch(`http://localhost:3001/users/${items.borrower}`)
            .then(response => response.json())
            .catch(errors => console.log(errors));
        }
    },
    User: {
        items(users) {
            return fetch(`http://localhost:3001/items/?itemOwner=${users.id}`)
            .then(response => response.json())
            .catch(errors => console.log(errors));
        },
        borrowedItems(users) {
            return fetch(`http://localhost:3001/items/?borrower=${users.id}`)
            .then(response => response.json())
            .catch(errors => console.log(errors));
        }
    }
}

export default resolveFunctions;

// const resolveFunctions = {
//   Query: {
//     movies() {
//       return fetch(`http://somemovieapi.com/movies/`)
//         .then(response => response.json())
//         .catch(errors => console.log(errors));
//     },
//     movie(root, { id }) {
//       return fetch(`http://somemovieapi.com/movies/${id}`)
//         .then(response => response.json())
//         .catch(errors => console.log(errors));
//     }
//   },
//   // ...other resolvers
// };

//USE THIS when linking item users to owners(?)
//Item Items User Users + Specific fields you need. Itemowner, borrower. Items and borrower for user type.