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
mutation saveBook($author:[], $description: String, $title: String, $bookId: Int, $image: String, $link: String){ 
    saveBook(author:$author, description: $description, title:$title, bookId: $bookId, image:$image, link:$link){
        _id
        username
        email
        bookCount
        savedBooks
    }
}
`;
export const REMOVE_BOOK =gql`
mutation removeBook($bookId:Int){
    removeBook(bookId: $bookId){
        _id
        username
        email
        bookCount
        savedBooks
    }
}
`;