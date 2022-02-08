<script>
    import postsObject from '/static/posts.json';
	import ProjectPreview from '$lib/ProjectPreview.svelte';
    export let category;

    let posts = postsObject;
	posts = posts.filter(project => project.category.includes(category));
</script>

{#each posts as post, i}
	{#if i % 2 == 0}
		<ProjectPreview {post} textRight={false} />
	{:else}
		<ProjectPreview {post} textRight={true} />
	{/if}
{/each}
