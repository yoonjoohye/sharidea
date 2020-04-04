import gql from 'graphql-tag';

const REGISTER = gql`
    mutation createUser($nickname: String!, $email: String!, $password:String!) {
        createUser(
            nickname:$nickname
            email:$email
            pw:$password
        ){
            id
            email
            nickname
            remember_token
        }
    }
`;
const REGISTERRR = gql`
    mutation createUser($nickname: String!, $email: String!, $password:String!) {
        createUser(
            nickname:$nickname
            email:$email
            pw:$password
        ){
            id
            email
            nickname
            remember_token
        }
    }
`;

export {REGISTER, REGISTERRR};