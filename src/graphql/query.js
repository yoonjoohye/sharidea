import gql from 'graphql-tag';

const CURRENTINFO=gql`
    query{
        me{
            id,
            nickname
        }
    }
`;

export {CURRENTINFO};
