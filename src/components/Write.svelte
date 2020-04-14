<script>
    let text = '';

    let openWrite = false;

    const onFocus = () => {
        openWrite = true;
    }

</script>

<div class="flex flex-row items-center border p-5 h-40" on:click={onFocus}>
    <div class="w-10/12 h-full flex flex-col justify-between">
            <textarea class="block w-full h-full resize-none rounded outline-none text-md"
                      placeholder="아무런 아이디어도 좋아요"
                      bind:value={text}
            ></textarea>

            <label for="feedback">
                <input type="checkbox" id="feedback"/>
                피드백 받기
            </label>
    </div>

    <button class="w-2/12 h-full shadow bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
        게시하기
    </button>
</div>