import {gql} from '@apollo/client'
export const GET_ME = gql`
query getMe {
    getMe {
        me {
         _id
         username
         savedBooks {
            bookId
            title
            description
            authors
            image
            link
         }   
        }
    }
}
`