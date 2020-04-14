<script>
    import {onMount} from 'svelte';
    import {user} from '../store/user';

    onMount(() => {
        if (sessionStorage.getItem('Authorization')) {
            user.set(sessionStorage.getItem('Authorization'));
        } else {
            user.set(null);
        }
    });
</script>