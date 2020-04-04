import ApolloClient from 'apollo-client';
import {setClient,getClient} from 'svelte-apollo';
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

export const Apollo=()=> {

    const link = createHttpLink({uri: 'http://192.168.0.9:8000/graphql', fetch: fetch});
    const cache = new InMemoryCache();

    const apolloClient = new ApolloClient({
        link,
        cache
    });
    setClient(apolloClient);

    return getClient();
}


