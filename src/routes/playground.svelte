<script>
	import postsObject from '/static/posts.json';
	import Projects from '$lib/Projects.svelte';
</script>

<svelte:head>
	<title>Jordan Louis - Playground</title>
</svelte:head>

<h1>Playground</h1>
<div class="max-width mt-16 mb-48">
	<p>
		In this section you will find all the creative work I do during my free time.
	</p>
</div>

<Projects category={'other'} />
