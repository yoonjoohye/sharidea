<script>
    import Write from '../components/Write.svelte';
    import Idea from '../components/Idea.svelte';
    import * as graphql from '../graphql/query';
    import {Apollo} from '../apollo';
    import {query} from 'svelte-apollo';
    import {onMount} from 'svelte';

    let list = [
        {
            slug: 'rhdb',
            contents: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis\n' +
                    '        eaque, exercitationem praesentium nihil.',
            date: '2019/03/23'
        },
        {
            slug: 'dh',
            contents: 'asdf',
            date: '2019/03/3'
        },
        {
            slug: 'aa',
            contents: 'alskdjf;klasjd;fklja;skldfj',
            date: '2019/03/13'
        },
        {
            slug: 'gg',
            contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis\n' +
                    '        eaque, exercitationem praesentium nihil.',
            date: '2019/03/13'
        },
        {
            slug: 'hmm',
            contents: 'alskdjf;klasjd;fklja;skldfj',
            date: '2019/03/13'
        }
    ];

    // let response;
    //
    // onMount(async () => {
    //     response = await query(Apollo(), {
    //         query: graphql.CURRENTINFO
    //     });
    //     $response.then(({data}) => {
    //         console.log(data.me)
    //     });
    // });

    // const onPush=(()=>{
    //     response=query(Apollo(),{
    //         query:graphql.CURRENTINFO
    //     });
    //     console.log(response);
    // });

    const goDetail = (param) => {
        location.href = `/detail/${param}`;
    }

</script>


<svelte:head>
    <title>Sharidea</title>
</svelte:head>
<!--<button on:click={onPush}>lsadf;aljsdf</button>-->

<div class="mb-10">
    <Write/>
</div>

{#each list as item}
    <div class="mb-5">
        <Idea item={item}/>
    </div>
{/each}
