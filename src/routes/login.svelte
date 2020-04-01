<script>
    const onLogin = () => {
        alert('s');
    }
</script>
<svelte:head>
    <title>로그인</title>
</svelte:head>

<section>
    <form class="w-full max-w-sm">
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    Username
                </label>
            </div>
            <div class="md:w-2/3">
                <input class="bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                       id="inline-full-name" type="text" placeholder="Username">
            </div>
        </div>
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
                    Password
                </label>
            </div>
            <div class="md:w-2/3">
                <input class="bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                       id="inline-username" type="password" placeholder="******************">
            </div>
        </div>
        <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
                <button class="shadow bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="button" on:click={onLogin}>
                    Sign In
                </button>
            </div>
        </div>
    </form>
</section>