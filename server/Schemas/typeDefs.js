const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Book {
       bookId(id: ID!): Book
       authors: [String]
       description: String
       title: String
       image: String
       link: String
    }
    type User {
         _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Auth {
        token: INT
        user: User
    }
    type Query {
        me: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(author:[], description: String, title: String, bookId: Int, image: String, link: String): User
        removeBook(bookId:Int): User
    }
`
module.exports = typeDefs