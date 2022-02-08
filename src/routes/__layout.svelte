<script>
	import Nav from '$lib/Nav.svelte';
</script>

<Nav />
<div class="container pt-104">
	<slot />
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
