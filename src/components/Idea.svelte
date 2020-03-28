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
            contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis\n' +
                    '        eaque, exercitationem praesentium nihil.',
            date: '2019/03/13'
        },
        {
            contents: 'alskdjf;klasjd;fklja;skldfj',
            date: '2019/03/13'
        }
    ]
</script>

{#each list as {contents}, idx}
    <div class="w-full rounded overflow-hidden shadow-lg p-6">
        <div class="mb-3">
            <p class="text-gray-700 text-base">
                {contents}
            </p>
        </div>
        <div>
            <span class="mr-3">하트</span>
            <span>댓글</span>
        </div>
    </div>
{/each}