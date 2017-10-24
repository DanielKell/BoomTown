import DataLoader from 'dataloader';
import { getUserOwnedItems, getUser, getItem, getUserBorrowedItems } from './jsonHelpers';
export default function() {
  return {
    UserOwnedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => getUserOwnedItems(id))
    ))),
    User: new DataLoader(ids => (
        Promise.all(ids.map(id => getUser(id))
    ))),
    Item: new DataLoader(ids => (
        Promise.all(ids.map(id => getItem(id))
    ))),
    UserBorrowedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => getUserBorrowedItems(id))
    ))),
  }
};

//This intercepts our queries, and if we are requesting data from multiple endpoints, it sends those requests a minimum number of times


//Fetching a single item. Fetching a single user. User's borrowed items.