<script>
    export let item;

    const goDetail = () => {
        location.href = `/detail/${item.slug}`;
    }
</script>


<div class="w-full rounded overflow-hidden shadow-lg p-6 cursor-pointer" on:click={goDetail}>
    <div class="flex flex-row align-items-center mb-3">
        <img class="w-6 h-6 rounded-full mr-5" src="logo-192.png"/>
        <span>닉네임</span>
    </div>
    <div class="mb-3">
        <p class="text-gray-700 text-base">
            {item.contents}
        </p>
    </div>
    <div>
        <span class="mr-3">하트</span>
        <span>댓글</span>
    </div>
</div>