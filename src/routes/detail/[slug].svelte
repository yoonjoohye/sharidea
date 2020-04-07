<script>
    import Idea from '../../components/Idea.svelte';
    import Reply from '../../components/Reply.svelte';

    let list = [
        {
            slug:'rhdb',
            contents: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis\n' +
                    '        eaque, exercitationem praesentium nihil.',
            date: '2019/03/23'
        },
        {
            slug:'dh',
            contents: 'asdf',
            date: '2019/03/3'
        },
        {
            slug:'aa',
            contents: 'alskdjf;klasjd;fklja;skldfj',
            date: '2019/03/13'
        },
        {
            slug:'gg',
            contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis\n' +
                    '        eaque, exercitationem praesentium nihil.',
            date: '2019/03/13'
        },
        {
            slug:'hmm',
            contents: 'alskdjf;klasjd;fklja;skldfj',
            date: '2019/03/13'
        }
    ]
</script>

<svelte:head>
    <title>Detail</title>
</svelte:head>

<div class="mb-5">
    {#each list as item}
        <Idea item={item}/>
    {/each}
</div>
<Reply/>