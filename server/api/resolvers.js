import fetch from 'node-fetch';
import {getItems, getItem, getUsers, getUser, getUserItems, getUserBorrowedItems, addItemNow} from './jsonHelpers';

const resolveFunctions = {
    Query: {
        items() {
        return getItems();
        },
        item(root, { id }) {
        return getItem(id);
        },
        users() {
        return getUsers();
        },
        user(root, { id }) {
        return getUser(id);
        }
    },
    Item: {
        itemOwner(items) {
            return getUser(items.itemOwner);
        },
        borrower(items) {
            return getUser(items.borrower);
        }
    },
    User: {
        items(user) {
            return getUserItems(user.id);
        },
        borrowedItems(user) {
            return getUserBorrowedItems(user.id);
        }
    },
    Mutation: {
        addItem(root, {title, imageUrl, description, itemOwner, tags}) {
            return addItemNow(title, imageUrl, description, itemOwner, tags);
      }
  }
}

export default resolveFunctions;

// To use query variables in graphiql, use something like:

//  query getItem($id: ID!){
//   item(id: $id) {
// 		title
//   } 
// }

// and in the variables section

// {
//   "id": 2
// }

// mutation addItem(
//   $title: String!
//   $imageUrl: String
//   $itemOwner:ID!
//   $description: String
//   $tags: [String]
// ) {
//   addItem(
//     itemOwner:$itemOwner
// 		title: $title
//     description:$description
//     tags: $tags
//     imageUrl: $imageUrl

//   ) {
//     title
//     description
//     imageUrl
//     tags
//     itemOwner {
//       fullName
//     }
//     borrower {
//       fullName
//     } 
//   }
// }

// {
//   "itemOwner": "LAi9TYWxgGhbjgHu1Sm6ZvB1tRP2",
//   "title": "I'm dope",
//   "description": "Hi",
//   "imageUrl": "hi",
//   "tags": [
//     "1"
//   ]
// }