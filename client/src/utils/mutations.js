import {gql} from '@apollo/client'

export const LOGIN_USER = gql`
login(email: String!, password: String!): Auth
`
export const ADD_USER = gql`
addUser(username: String!, email: String!, password: String!): Auth
`
export const SAVED_BOOK =gql`
saveBook(author:[], description: String, title: String, bookId: Int, image: String, link: String): User
`
export const REMOVE_BOOK =gql`
removeBook(bookId:Int): User
`