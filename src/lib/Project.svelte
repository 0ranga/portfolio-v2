<script>
	export let post;
</script>

<div class="overlay-container m-16 mtb-16">
	<a class="overlay" href={`/${post.slug}`}>
		<p class="overlay-text">{post.name}</p>
	</a>
	<img src={`/images/${post.id}/1.png`} alt="" />
</div>

<style>
	img {
		width: 100%;
        height: 100%;
	}

	.overlay-container {
		position: relative;
	}

	.overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: white;
		opacity: 0;
		transition: 0.6s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.overlay-text {
		position: relative;
		text-align: center;
		top: 50%;
		transform: translate(0, -50%);
	}

	.overlay-container:hover .overlay {
		opacity: .8;
	}
</style>
