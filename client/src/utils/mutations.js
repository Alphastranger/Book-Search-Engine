import {gql} from '@apollo/client'

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!){
    loginUser(email: $email, password: $password){
        token
        user {
            _id
            username
        }
    }
}
`;
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!){
    addUser(username: $username, email: $email, password: $password){
        token
        user {
            _id
            username
            
        }
    }
}
`;
export const SAVE_BOOK = gql`
mutation saveBook($author:[String], $description: String, $title: String, $bookId: String!, $image: String, $link: String){ 
    saveBook(author:$author, description: $description, title:$title, bookId: $bookId, image:$image, link:$link){
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            image
            description
            title
            link
          }
    }
}
`;
export const REMOVE_BOOK =gql`
mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId){
        _id
        username
        email
        savedBooks {
            bookId
            authors
            image
            description
            title
            link
          }
    }
}
`;