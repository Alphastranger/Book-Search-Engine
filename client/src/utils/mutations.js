import {gql} from '@apollo/client'

export const LOGIN_USER = gql`
mutation loginUser(email: String!, password: String!): Auth
`;
export const ADD_USER = gql`
mutation addUser(username: String!, email: String!, password: String!): Auth
`;
export const SAVED_BOOK =gql`
mutation saveBook(author:[], description: String, title: String, bookId: Int, image: String, link: String): User
`;
export const REMOVE_BOOK =gql`
mutation removeBook(bookId:Int): User
`;