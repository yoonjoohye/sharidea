<script>
    let text = '';
    let reply = [
        {
            contents: 'sdfdsfsdf',
            date: '2019-12-30',
            nickname: '로kun'
        },
        {
            contents: '어어어ㅓ',
            date: '2000-12-15',
            nickname: '쥬hye'
        }
    ]
</script>

<section class="w-full">
    <div class="flex items-center justify-center h-24">
        <textarea class="w-10/12 p-3 h-full resize-none outline-none border w-full focus:border-blue-600" placeholder="의견을 달아주세요" bind:value={text}/>
        <button class="w-2/12 h-full bg-blue-600 text-white outline-none border-0 focus:bg-blue-700">등록</button>
    </div>
    {#each reply as item, idx }
    <div class="mb-5">
        <div>{item.contents}</div>
        <div class="text-sm text-gray-600">{item.date}</div>
    </div>
    {/each}
</section>
