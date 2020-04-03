<script>
	import Nav from '../components/Nav.svelte';
	import {onMount} from 'svelte';
	import ApolloClient from 'apollo-client';
	import {setClient} from 'svelte-apollo';
	import fetch from 'node-fetch';
	import { createHttpLink } from 'apollo-link-http';
	import {InMemoryCache} from 'apollo-cache-inmemory';

	export let segment;

	onMount(async()=>{
		const link = createHttpLink({  uri:'http://192.169.0.9:8000/graphql', fetch: fetch });
		const cache=new InMemoryCache();

		const client=new ApolloClient({
			link,
			cache
		});
		setClient(client);
	});
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>
<main>
	<slot></slot>
</main>
