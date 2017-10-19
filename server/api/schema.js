import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers'; //Functions that tell us where to get the data

const typeDefs = `
    type Item {
        id: ID!
        title: String!
        description: String
        imageUrl: String
        tags: [String]
        itemOwner: User!
        createdOn: String!
        available: Boolean!
        borrower: User
    }
    type User {
        id: ID!
        email: String!
        fullName: String!
        bio: String
        items: [Item]
        borrowedItems: [Item] 
    }
    type Query {
        items: [Item]
        item(id: ID!): Item
        users: [User]
        user(id: ID!): User 
    }
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});

    // type Person {
    //     id: ID!
    //     name: String!
    //     birthday: String
    //     placeOfBirth: String
    //     bio: String
    //     filmography: [Movie]
    // }
    // type Movie {
    //     id: ID!
    //     title: String!
    //     releaseDate: String
    //     stars: [Person]
    //     director: Person
    // }
    // type Query {
    //     people: [Person]
    //     person(id: ID!): Person
    //     movies: [Movie]
    //     movie(id: ID!): Movie
    // }