<script>
    let text = '';
    let feedback='';
    let topic='생활';
    let openWrite = false;


    const onOpen = () => {
        openWrite = true;
    }
    const onClose=()=>{
        openWrite = false;

    }
    const onPost=()=>{
        console.log(feedback);
    }

</script>

{#if openWrite}
    <div class="fixed bottom-0 right-0 left-0 w-full h-full bg-semiblack backdrop-filter z-10"></div>
    <div class="relative border p-5 z-20 bg-white">
        <div class="flex">
            <div class="w-full text-center mb-5">
                <div class="text-2xl font-bold">아이디어 주제</div>
                <input class="text-lg font-medium text-center outline-none" type="text" bind:value={topic}/>
            </div>

            <div class="justify-end">
                <img class="cursor-pointer w-5 h-5" src="close.svg" alt="sharidea-닫는이미지" on:click={onClose}/>
            </div>
        </div>
        <div class="w-full h-full flex flex-col justify-between mb-5">
                <textarea class="block w-full h-48 resize-none rounded outline-none text-md"
                          placeholder="아무런 아이디어도 좋아요"
                          bind:value={text}
                ></textarea>
        </div>
        <div class="mb-5">
            <label class="cursor-pointer" for="feedback">
                <input type="checkbox" id="feedback" bind:checked={feedback}/>
                피드백 받기
            </label>
        </div>
        <button class="w-full h-full shadow bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" on:click={onPost}>
            게시하기
        </button>
    </div>
{:else}
    <div class="flex flex-row items-center border p-5 h-40" on:click={onOpen}>
        <div class="w-full h-full flex flex-col justify-between">
            <textarea class="block w-full h-full resize-none rounded outline-none text-md"
                      placeholder="아무런 아이디어도 좋아요"
            ></textarea>
        </div>
    </div>
{/if}