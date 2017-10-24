import fetch from 'node-fetch';
import {getItems, getItem, getUsers, getUser, getUserItems, getUserBorrowedItems, addItemNow} from './jsonHelpers';

const resolveFunctions = {
    Query: {
        items() {
        return getItems();
        },
        item(root, { id }, context) {
        // return getItem(id);
        return context.loaders.getItem.load(id)
        },
        users() {
        return getUsers();
        },
        user(root, { id }, context) {
        // return getUser(id);
        return context.loaders.getUser.load(id)
        }
    },
    // Item: {
    //     itemOwner(items) {
    //         return getUser(items.itemOwner);
    //     },
    //     borrower(items) {
    //         return getUser(items.borrower);
    //     }
    // },
    Item: {
    itemOwner(items, args, context){
      if (!items.itemOwner) return null
      return context.loaders.User.load(items.itemOwner)
      // return getUser(item.itemowner)
    },
    borrower(items, args, context){
      if (!items.borrower) return null
      // return getUser(item.borrower)
      return context.loaders.User.load(items.borrower)
    }
  },
    User: {
        items(user, args, context) {
            // return getUserItems(user.id);
            return context.loaders.UserOwnedItems.load(user.id)
        },
        borrowedItems(user, args, context) {
            // return getUserBorrowedItems(user.id);
            return context.loaders.UserBorrowedItems.load(user.id)
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