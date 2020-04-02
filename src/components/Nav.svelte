<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid #edf2f7;
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: #3182ce;
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
		<li><a aria-current='{segment === undefined ? "page" : undefined}' href='/'>홈</a></li>
		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch aria-current='{segment === "mypage" ? "page" : undefined}' href='/mypage'>마이페이지</a></li>

		<li><a rel=prefetch aria-current='{segment === "login" || segment==="register" ? "page" : undefined}' href='/login'>로그인/가입</a></li>

	</ul>
</nav>
