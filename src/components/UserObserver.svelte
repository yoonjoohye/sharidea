<script>
    import {onMount} from 'svelte';
    import {token} from '../store/user';

    onMount(() => {
        if (sessionStorage.getItem('Authorization')) {
            token.set(sessionStorage.getItem('Authorization'));
        } else {
            token.set(null);
        }
    });
</script>