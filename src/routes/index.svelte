<script>
    let list = [
        {
            contents: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis\n' +
                    '        eaque, exercitationem praesentium nihil.',
            date: '2019/03/23'
        },
        {
            contents: 'asdf',
            date: '2019/03/3'
        },
        {
            contents: 'alskdjf;klasjd;fklja;skldfj',
            date: '2019/03/13'
        },
        {
            contents: 'alskdjf;klasjd;fklja;skldfj',
            date: '2019/03/13'
        },
        {
            contents: 'alskdjf;klasjd;fklja;skldfj',
            date: '2019/03/13'
        }
        ]
</script>

<svelte:head>
    <title>Sharidea</title>
</svelte:head>


<div class="grid grid-cols-3 gap-4">
{#each list as {contents,date}, idx}
    <div class="max-w-sm rounded overflow-hidden shadow-lg p-6">
        <p class="text-gray-700 text-base mb-2">
            {contents}
        </p>
        <div class="mb-4">{date}</div>

        <div class="flex align-items-center">
            <div class="mr-3">하트</div>
            <div>댓글</div>
        </div>
    </div>
    {/each}
</div>
