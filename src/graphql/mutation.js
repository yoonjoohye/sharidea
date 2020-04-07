import gql from 'graphql-tag';

const REGISTER = gql`
    mutation createUser($nickname: String!, $email: String!, $password:String!) {
        createUser(
            nickname:$nickname
            email:$email
            pw:$password
        )
    }
`;

const LOGIN = gql`
    mutation login($email: String!, $password:String!) {
        login(
            email:$email
            pw:$password
        )
    }
`;

export {REGISTER,LOGIN};