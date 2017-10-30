import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers'; //Functions that tell us where to get the data

const typeDefs = `
    type Item {
        id: ID!
        title: String!
        description: String
        imageUrl: String
        tags: [Tag]
        itemOwner: User!
        createdOn: String!

        borrower: User
    }
    type Tag {
        tagid: ID!
        title: String!
    }
    type User {
        id: ID!
        email: String!
        fullName: String
        bio: String
        items: [Item]
        borrowedItems: [Item] 
    }
    type Query {
        items: [Item]
        item(id: ID!): Item
        users: [User]
        user(id: ID!): User 
        tags: [Tag]
        tag(tagid: ID!): Tag
    }
      type Mutation { 
        addItem (
            title: String!
            imageUrl: String
            itemOwner: ID!
            description: String
            tags: [String]
        ): Item
    }
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});