<script>
	import Nav from '$lib/Nav.svelte';
</script>

<Nav />
<div class="container pt-104">
	<slot />
</div>

<div style = "bottom: 0;" class="container max-width mt-16 mb-48">
	<p style = "font-family: roc-grotesk; font-size: 1.01em; text-align: center; color: #909090">Website designed and built by me with SvelteKit.</p>
</div>

<style>
	.container {
		max-width: 1040px;
		margin-left: auto;
		margin-right: auto;
	}

	@media screen and (min-width: 601px) and (max-width: 1194px) {
		.container {
			padding-left: 56px;
			padding-right: 56px;
		}
	}

	@media screen and (max-width: 600px) {
		.container {
			padding-left: 16px;
			padding-right: 16px;
			max-width: 100%;
		}
	}
</style>
