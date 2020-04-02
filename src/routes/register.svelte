<script>
    let nickname;
    let email;
    let password;

    let nicknameValid;
    let emailValid;
    let passwordValid;

    const emailCheck = /^[A-Za-z0-9_.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    const passwordCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

    const onNicknameValid=()=> {
        if (!nickname) {
            nicknameValid = '닉네임을 입력해주세요!';
        } else {
            nicknameValid = null;
        }
    }

    const onEmailValid=()=> {
        if (!email) {
            emailValid = '이메일을 입력해주세요!';
        } else if (emailCheck.test(email) === false) {
            emailValid = '이메일 형식을 맞춰주세요!';
        } else {
            emailValid = null;
        }
    }

    const onPasswordValid=()=> {
        if (!password) {
            passwordValid = '패스워드를 입력해주세요!';
        } else if (passwordCheck.test(password) === false) {
            passwordValid = '영문+숫자+문자 조합으로 8~16자를 사용해주세요!';
        } else {
            passwordValid = null;
        }
    }

    const onRegister = () => {


    }
</script>
<svelte:head>
    <title>로그인</title>
</svelte:head>

<section class="flex items-center justify-center">
    <form class="w-full max-w-sm">
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-nickname">
                    닉네임
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-600 focus:bg-white"
                       class:border-red-500={nicknameValid}
                       id="grid-nickname" type="text" placeholder="닉네임" bind:value={nickname} on:change={onNicknameValid}>
                {#if nicknameValid}
                    <div class="text-sm text-red-500">{nicknameValid}</div>
                {/if}
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-id">
                    이메일
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-600 focus:bg-white"
                       class:border-red-500={emailValid}
                       id="grid-id" type="text" placeholder="juice@sharidea.com" bind:value={email} on:change={onEmailValid}>
                {#if emailValid}
                    <div class="text-sm text-red-500">{emailValid}</div>
                {/if}
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    패스워드
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-600 focus:bg-white focus:border-gray-500"
                       class:border-red-500={passwordValid}
                       id="grid-password" type="password" placeholder="******************" bind:value={password} on:change={onPasswordValid}>
                {#if passwordValid}
                    <div class="text-sm text-red-500">{passwordValid}</div>
                {/if}
            </div>
        </div>
        <div class="md:flex md:items-center">
            <button class="w-full shadow bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button" on:click={onRegister}>
                가입하기
            </button>

        </div>
    </form>
</section>