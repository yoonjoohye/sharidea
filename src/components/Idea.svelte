<script>
    export let item;

    const goDetail = () => {
        location.href = `/detail/${item.slug}`;
    }

    const goMypage = () => {
        location.href = `/mypage/${item.slug}`;
    }

    let isClicked = false;
    let likeCount = 0;

    const onClickHeart = () => {
        isClicked = !isClicked;

        if (isClicked) {
            likeCount += 1;
        } else {
            likeCount -= 1;
        }
    }
</script>


<div class="w-full rounded overflow-hidden shadow-lg p-6">
    <div class="flex flex-row items-center mb-3">
        <span class="cursor-pointer" on:click={goMypage}>닉네임</span>
    </div>
    <div class="mb-5">
        <p class="text-gray-700 text-base cursor-pointer" on:click={goDetail}>
            {item.contents}
        </p>
    </div>
    <div class="flex flex-row items-center">
        <div class="flex flex-col justify-center items-center mr-5">
            <div class="comment" class:press={isClicked}>좋아요</div>
            <div class="like" class:press={isClicked} on:click={onClickHeart}></div>
        </div>
        <!--        <img class="w-5 h-5 cursor-pointer" src="comment.svg"  on:click={goDetail} />-->
    </div>
    <div>
        {#if likeCount>0}
            <div class="text-sm">
                <span class="font-medium">{likeCount}명</span>이 좋아합니다
            </div>
        {/if}
    </div>
</div>