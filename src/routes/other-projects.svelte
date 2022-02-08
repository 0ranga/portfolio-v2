<script>
	import postsObject from '/static/posts.json';
	import Projects from '$lib/Projects.svelte';
</script>

<svelte:head>
	<title>Jordan Louis - Miscellaneous projects</title>
</svelte:head>

<h1>Miscellaneous projects</h1>
<div class="max-width mt-16 mb-48">
	<p>
		Here are a few other projects that I have worked on. They range across many disciplines: from
		designing logos and branding to filmmaking and music production.
	</p>
</div>

<Projects category={'other'} />
