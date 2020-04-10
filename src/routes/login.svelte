<script>
    import * as graphql from '../graphql/mutation';
    import {mutate} from 'svelte-apollo';
    import {Apollo} from '../apollo';

    let email='';
    let password='';

    let response;
    const onLogin = async () => {
        try{
            response=await mutate(Apollo(),{
                mutation:graphql.LOGIN,
                variables:{email,password}
            });
            console.log(response);
            sessionStorage.setItem('Authorization',response.data.login);
            location.href='/';
        }catch(err){
            console.log(err);
        }
    }
</script>
<svelte:head>
    <title>로그인</title>
</svelte:head>

<section class="flex items-center justify-center">
    <form class="w-full max-w-sm">
        <div class="md:flex md:items-center mb-6">
            <div class="w-3/12">
                <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2  mb-1 md:mb-0 pr-4"
                       for="id">
                    이메일
                </label>
            </div>
            <div class="w-9/12">
                <input class="bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                       id="id" type="text" placeholder="juice@sharidea.com" autocomplete="off" bind:value={email}>
            </div>
        </div>
        <div class="md:flex md:items-center mb-6">
            <div class="w-3/12">
                <label class="block tracking-wide text-gray-700 text-xs font-bold  mb-1 md:mb-0 pr-4"
                       for="password">
                    패스워드
                </label>
            </div>
            <div class="w-9/12">
                <input class="bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                       id="password" type="password" placeholder="******************" autocomplete="off" bind:value={password}>
            </div>
        </div>
        <div class="md:flex md:items-center mb-6">
            <div class="w-3/12"></div>
            <div class="w-9/12 text-right">
                <a class="text-sm" href="/register">아직 회원이 아니시라면 ></a>
            </div>
        </div>
        <div class="md:flex md:items-center">
            <button class="w-full shadow bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button" on:click={onLogin}>
                로그인
            </button>

        </div>
    </form>
</section>