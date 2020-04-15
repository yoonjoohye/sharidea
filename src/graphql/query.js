import gql from 'graphql-tag';

const CURRENTINFO = gql`
    query me{
        me{
            id,
            nickname,
            email,
            created_at
            
        }
    }
`;

export {CURRENTINFO};
