<script>
    import {onMount} from 'svelte';
    import * as graphql from '../graphql/query';
    import {Apollo} from '../apollo';
    import {query} from 'svelte-apollo';
    import {token,userInfo} from '../store/user';

    let response;

    onMount(async() => {
        if (sessionStorage.getItem('Authorization')) {
            token.set(sessionStorage.getItem('Authorization'));

            response = await query(Apollo(), {
                query: graphql.CURRENTINFO
            });
            $response.then(({data}) => {
                userInfo.set(data.me);
                console.log(data.me);
            });

        } else {
            token.set(null);
        }
    });
</script>