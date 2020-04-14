import ApolloClient from 'apollo-client';
import {setClient,getClient} from 'svelte-apollo';
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';

export const Apollo=()=>{

    const httpLink = createHttpLink({uri: 'http://192.168.0.9:8000/graphql', fetch: fetch});

    const token = sessionStorage.getItem('Authorization');
    const authLink = setContext(async(_, { headers }) => {
        return {
            headers: {
                ...headers,
                Authorization: token ? `Bearer ${token}` : "",
            }
        }
    });
    const cache = new InMemoryCache();

    const apolloClient = new ApolloClient({
        link:authLink.concat(httpLink),
        cache
    });
    setClient(apolloClient);

    return getClient();
}


