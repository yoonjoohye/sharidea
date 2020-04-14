<script>
    import {onMount} from 'svelte';

    onMount(()=>{
        sessionStorage.removeItem('Authorization');
        location.href='/';
    });
</script>