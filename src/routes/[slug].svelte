<script context="module">
	export async function load({ page }) {
		const slug = page.params.slug;
		return {
			props: {
				slug: slug
			}
		};
	}
</script>

<script>
	export let slug;
	import posts from '/static/posts.json';

	const post = posts.find((el) => el.slug == slug);

	async function getHtmlPage() {
		const response = await fetch(`/posts/${post.slug}.html`);
		const data = await response.text();

		if (response.ok) {
			return data;
		} else {
			throw new Error(data);
		}
	}

	let htmlPage = getHtmlPage();
</script>

<svelte:head>
	<title>{post.name}</title>
	<style>
		body {
			background: white;
		}
	</style>
</svelte:head>

<main class="project">
	{#if post.construction == true}
		{#await htmlPage}
			<div class="construction">
				<p>Waiting...</p>
			</div>
		{:then page}
			{@html page}
		{:catch}
			<div class="construction">
				<p>This project is in construction.</p>
				<p><a href="/">Click here to go back to the home page</a></p>
			</div>
		{/await}
	{:else if post.preview == true}
		<div class="construction">
			<p>The project you are trying to reach is unavailable</p>
			<p><a href="/">Click here to go back to the home page</a></p>
		</div>
	{:else}
		<div class="gold intro">
			<h1>{post.name}</h1>

			<div class="flex">
				<h3>{post.role}</h3>
				<h5 class="caption1">—{post.date}</h5>
			</div>

			<div>
				<p class="outline">
					{@html post.intro}
				</p>
			</div>
			<div class="project-text-tag">
				{#each post.tags as tag}
					<span class="callout">#{tag}</span>
				{/each}
			</div>
		</div>

		{#await htmlPage}
			<div class="construction">
				<p>Waiting...</p>
			</div>
		{:then page}
			{@html page}
		{/await}
	{/if}
</main>

<style>
	:global(.construction p) {
		text-align: center;
	}

	.flex {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}

	.flex * {
		margin-left: 0;
		margin-right: 0;
	}
	/* ------------------------- Removing the background ------------------------ */
	/* :global(body.projectBody) {
		background-image: none;
	} */

	/* -------------------------------- Container ------------------------------- */
	main.project > :global(:not(img)) {
		margin-left: auto;
		margin-right: auto;
		max-width: 704px;
	}

	main {
		position: relative;
		margin-bottom: 80px;
		z-index: 1;
	}

	/* ----------------------------- Gold container ----------------------------- */
	main.project :global(.gold) {
		width: 100%;
		background: linear-gradient(
				254.63deg,
				rgba(213, 191, 0, 0.2) 14.08%,
				rgba(133, 183, 174, 0.12) 73.55%,
				rgba(239, 236, 209, 0) 106.17%
			),
			linear-gradient(251.38deg, rgba(255, 255, 255, 0.2) -6.57%, rgba(208, 208, 208, 0.2) 90.73%);
		border-radius: 40px;
		backdrop-filter: blur(20px);
		/* border: 2px solid rgba(255, 255, 255, 0.2); */
		border: 2px solid rgba(239, 236, 209, 0);
		opacity: 1;
		padding: 40px;
	}

	main.project :global(.gold::after) {
		content: '';
		background: url(/noise.png);
		position: absolute;
		top: 0;
		left: 0;
		mix-blend-mode: overlay;
		opacity: 0.64;
		border-radius: 40px;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 0;
	}

	/* ----------------------------------- tag ---------------------------------- */
	.project-text-tag {
		color: #d0d0d0;
		display: flex;
		justify-content: flex-start;
		gap: 8px;
		flex-wrap: wrap;
		margin-top: 32px;
	}

	.project-text-tag span {
		background-color: #fdfcf2;
		border-radius: 43px;
		padding: 2px 8px;
		border: 1px solid #d0d0d0;
	}

	/* --------------------------------- Images --------------------------------- */
	main.project :global(img) {
		display: block;
		width: 100%;
		position: relative;
		/* border-radius: 5px; */
		/* filter: drop-shadow(0px 50px 100px rgba(74, 71, 39, 0.31)); */
		z-index: 1;
		margin-top: 64px;
		margin-left: auto;
		margin-right: auto;
	}

	/* ------------------------- Typography and margins ------------------------- */
	main.project :global(h2) {
		font-family: roc-grotesk;
		font-size: 30px;
		font-size: 1.875em;
		font-style: normal;
		font-weight: 400;
		line-height: 32px;
		line-height: 150%;
		letter-spacing: 0em;
		text-align: left;
		margin-top: 80px;
	}

	main.project :global(.inter-title + h2) {
		margin-top: 10px;
	}

	main.project :global(.outline) {
		font-family: roc-grotesk;
		font-size: 18px;
		font-size: 1.125em;
		font-style: normal;
		font-weight: 500;
		line-height: 26px;
		line-height: 144%;
		letter-spacing: 0em;
		text-align: left;
		margin-top: 24px;
	}

	main.project :global(h3) {
		color: #6f908a;
	}

	main.project :global(h2 + h3),
	main.project .intro h3 {
		margin-top: 0px;
	}

	main.project :global(h3) {
		margin-top: 64px;
	}

	main.project :global(.h3) {
		font-family: 'New York Large', serif;
		font-size: 28px;
		font-size: 1.75em;
		font-style: normal;
		font-weight: 400;
		line-height: 33px;
		line-height: 118%;
		letter-spacing: 0em;
		text-align: left;
		margin-top: 40px;
	}

	main.project :global(p) {
		margin-top: 24px;
	}

	main.project :global(.inter-title) {
		margin-top: 104px;
	}

	main.project :global(.subhead) {
		margin-top: 4px;
		/* text-transform: uppercase; */
		text-align: center;
		margin-bottom: 64px;
	}

	main.project :global(.block) {
		display: block;
	}

	main.project :global(a:hover) {
		text-decoration: underline;
	}

	@media screen and (max-width: 740px) {
		.flex {
			flex-direction: column;
		}
	}

</style>
