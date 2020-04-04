import gql from 'graphql-tag';

export const GET_DATA = ()=> {
  gql`
    query {
      user(id:4){
        nickname
        email
        pw
      }
    }
  `;
}
