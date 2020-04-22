import ApolloClient from 'apollo-client';
import {setClient,getClient} from 'svelte-apollo';
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';

export const Apollo=()=>{

    let httpLink = createHttpLink({uri: 'https://api.sharidea.yoonjoohye.xyz/graphql', fetch:fetch});

    let authLink = setContext((_, { headers }) => {
        const token = sessionStorage.getItem('Authorization');

        return {
            headers: {
                ...headers,
                'Authorization': token ? `Bearer ${token}` : '',
            }
        }
    });
    const cache = new InMemoryCache();

    const apolloClient = new ApolloClient({
        link:authLink.concat(httpLink),
        // link:httpLink,
        cache
    });

    setClient(apolloClient);

    return getClient();
}


