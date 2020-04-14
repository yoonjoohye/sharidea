import gql from 'graphql-tag';

const CURRENTINFO = gql`
   query me{
      me{
        id
      }
    }
`;

export {CURRENTINFO};
