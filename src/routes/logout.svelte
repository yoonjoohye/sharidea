<script>
    import {onMount} from 'svelte';
    onMount(async()=>{
       await sessionStorage.removeItem('Authorization');
       location.href='/';
    });
</script>