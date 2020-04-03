<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`mypage.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>


<svelte:head>
	<title>mypage</title>
</svelte:head>

<div class="bg-blue-600 text-center text-white">
	작성한 아이디어
</div>

<div class="bg-blue-600 text-center text-white">
	좋아요 누른 아이디어
</div>

