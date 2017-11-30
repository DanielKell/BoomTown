import fetch from 'node-fetch';
import {getItem, getUserItems, getUserBorrowedItems, addItemNow} from './jsonHelpers';
import { getUser, getUsers } from './firebaseHelpers';
import {database} from '../index.js';
const resolveFunctions = {

    Query: {
        items() {
        return database.getItems();
        },
        item(root, { id }, context) {
        return context.loaders.Item.load(id)
        },
        users() {
        return getUsers();
        },
        user(root, { id }, context) {
        return context.loaders.User.load(id)
        },
        tags() {
        return database.getTags();
        }
    },

    Item: {
    itemOwner(item, args, context){
      if (!item.itemowner) return null
      return context.loaders.User.load(item.itemowner)
    },
    borrower(items, args, context){
      if (!items.borrower) return null
      return context.loaders.User.load(items.borrower)
    },
    tags(item, args){
      return database.getTag(item.id);
    }
  },
    User: {
        items(user, args, context) {
            return context.loaders.UserOwnedItems.load(user.id)
        },
        borrowedItems(user, args, context) {
            return context.loaders.UserBorrowedItems.load(user.id)
        }
    },
    
    Mutation: {
        addItem(root, {title, imageurl, description, itemowner, tags}) {
            return database.addCardItemHelper(title, imageurl, description, itemowner, tags);
    }
  }
}

export default resolveFunctions;