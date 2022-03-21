<script>
	import { onMount } from 'svelte';
	import VanillaTilt from 'vanilla-tilt';

	export let post;
	export let textRight = false;
	let projectText;
	let projectImage;
	let projectImageImg;

	onMount(() => {
		projectText.classList.add('not-visible');
		projectImage.classList.add('not-visible');
		let observer = new IntersectionObserver(
			function (observables) {
				// console.log(observables);
				observables.forEach((observable) => {
					if (observable.intersectionRatio > 0.5) {
						observable.target.classList.remove('not-visible');
						observer.unobserve(observable.target);
						console.log(observable);
					}
				});
			},
			{
				threshold: [0.5]
			}
		);
		observer.observe(projectText);
		observer.observe(projectImage);

		if (post.preview == true) {
			console.log(post.name);
			projectText.addEventListener('click', (e) => e.preventDefault());
			projectText.style.pointerEvents = 'none';
			projectText.style.cursor = 'default';
			projectImage.addEventListener('click', (e) => e.preventDefault());
			projectImage.style.cursor = 'default';
		}

		VanillaTilt.init(projectImageImg, {
			max: 10,
			speed: 800
		});
	});
</script>

<div class="column project">
	<a
		bind:this={projectText}
		href={`/${post.slug}/`}
		class={(textRight == true ? 'right grid-7-13' : 'left grid-1-7') + ' project-text-container'}
	>
		<div class="project-text-background" />

		<div class="project-text">
			<div class="project-text-header mt-40 ml-40 mr-40 z-index-1">
				<h2 class="">{post.name}</h2>
			</div>
			<div class="project-text-body z-index-1">
				<div class="project-text-subheader ml-40 mr-40">
					<h3>{post.role}</h3>
					<h5 class="caption1">—{post.date}</h5>
				</div>
				<p class={(textRight == true ? 'ml-165' : 'ml-40') + ' mt-16'}>
					{post.outline}
				</p>
			</div>
			<div class={(textRight == true ? 'ml-165' : 'ml-40') + ' project-text-tag'}>
				{#each post.tags as tag}
					<span class="callout">#{tag}</span>
				{/each}
			</div>
		</div>
	</a>

	<a
		href={`/${post.slug}/`}
		bind:this={projectImage}
		class={(textRight == true ? 'right grid-1-9' : 'left grid-5-13') + ' project-img-container'}
	>
		<img
			bind:this={projectImageImg}
			class="project-img"
			src={`/images/${post.slug}/thumbnail.jpg`}
			alt=""
		/>
	</a>
</div>

<style>
	.project {
		position: relative;
		margin-bottom: 80px;
	}

	.z-index-1 {
		position: relative;
		/* z-index:1; */
	}

	a {
		color: #413d1b;
	}

	a:hover {
		text-decoration: none;
	}

	/* -------------------------------------------------------------------------- */
	/*                                Project-text                                */
	/* -------------------------------------------------------------------------- */

	/* ------------------------- Project-text-container ------------------------- */

	.project-text-container {
		position: relative;
		width: 100%;
		height: 448px;
		background: linear-gradient(
				254.63deg,
				rgba(213, 191, 0, 0.2) 14.08%,
				rgba(133, 183, 174, 0.12) 73.55%,
				rgba(239, 236, 209, 0) 106.17%
			),
			linear-gradient(251.38deg, rgba(255, 255, 255, 0.2) -6.57%, rgba(208, 208, 208, 0.2) 90.73%);
		border-radius: 40px;
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
		/* border: 2px solid rgba(255, 255, 255, 0.2); */
		border: 2px solid rgba(239, 236, 209, 0);
		/* border: 2px solid;
		border-image-source: linear-gradient(
				246.39deg,
				rgba(255, 255, 255, 0.2) -6.05%,
				rgba(208, 208, 208, 0.2) 90.93%
			),
			linear-gradient(
				248.39deg,
				rgba(213, 191, 0, 0.2) -45.57%,
				rgba(133, 183, 174, 0.12) 52.08%,
				rgba(239, 236, 209, 0) 105.63%
			); */
		overflow: hidden;
		transition: 0.5s;
		opacity: 1;
	}

	.project-text-container::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			251.38deg,
			rgba(255, 255, 255, 0.8) -6.57%,
			rgba(208, 208, 208, 0.8) 90.73%
		);
		transition: 0.5s;
	}

	.left.project-text-container.not-visible {
		transform: translateX(50px);
		opacity: 0;
	}

	.right.project-text-container.not-visible {
		transform: translateX(-50px);
		opacity: 0;
	}

	/* --------------------------- Project-text-header -------------------------- */

	.project-text-subheader {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}

	.project-text-subheader h5 {
		white-space: nowrap;
	}

	/* ---------------------------- Project-text-body --------------------------- */
	.project-text-body h3 {
		color: #6f908a;
	}

	.project-text-body p {
		width: 299px;
		/* font-size: 1.25em; */
		height: 100%;
		/* font-size: 20px;
		line-height: 140%;
		margin-top: 60px; */
	}

	/* ---------------------------- Project-text-tag ---------------------------- */

	.project-text-tag {
		color: #d0d0d0;
		position: absolute;
		bottom: 32px;
		display: flex;
		width: 299px;
		gap: 8px;
		flex-wrap: wrap;
	}

	.project-text-tag span {
		background-color: #fdfcf2;
		border-radius: 43px;
		padding: 2px 8px;
		border: 1px solid #d0d0d0;
	}

	/* ------------------------- Project-text-background ------------------------ */

	.project-text-background {
		background: url(/noise.png);
		position: absolute;
		mix-blend-mode: overlay;
		opacity: 0.64;
		border-radius: 40px;
		width: 100%;
		height: 100%;
		z-index: 0;
	}

	/* ---------------------------- End project-text ---------------------------- */
	/* -------------------------------------------------------------------------- */
	/* -------------------------------------------------------------------------- */

	/* -------------------------------------------------------------------------- */
	/*                                 Project-img                                */
	/* -------------------------------------------------------------------------- */

	.project-img-container {
		/* height: 0; */
		/* overflow: hidden; */
		padding-top: 56.25%;
		position: relative;
		top: -324px;
		/* top: -300px; */
		margin-bottom: -324px;
		/* margin-bottom: -300px; */
		opacity: 1;
		transition: 0.5s;
		z-index: 20;
	}

	.left.project-img-container.not-visible {
		transform: translateX(50px);
		opacity: 0;
	}

	.right.project-img-container.not-visible {
		transform: translateX(-50px);
		opacity: 0;
	}

	.project-img {
		position: absolute;
		border-radius: 13px;
		top: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		/* filter: drop-shadow(0px 50px 100px rgba(74, 71, 39, 0.31)); */
		box-shadow: 0px 50px 100px rgba(74, 71, 39, 0.31);
		transition: 0.5s;
	}

	/* --------------------------- End of project-img --------------------------- */
	/* -------------------------------------------------------------------------- */
	/* -------------------------------------------------------------------------- */

	@media screen and (min-width: 1195px) {
		.project-text-container:hover::before {
			left: 0%;
		}

		.right.project-text-container:hover {
			transform: translate(5%);
		}

		.left.project-text-container:hover {
			transform: translate(-5%);
		}

		.column {
			display: grid;
			grid-template-columns: repeat(12, 1fr);
			column-gap: 32px;
		}

		.grid-1-7 {
			grid-column: 1/7;
		}

		.grid-7-13 {
			grid-column: 7/13;
		}

		.grid-5-13 {
			grid-column: 5/13;
		}

		.grid-1-9 {
			grid-column: 1/9;
		}

		.project-text-body p {
			padding-top: 48px;
			/* text-align: center; */
		}
	}

	@media screen and (min-width: 741px) and (max-width: 1194px) {
		.column {
			display: grid;
			grid-template-columns: repeat(8, 1fr);
			column-gap: 16px;
		}

		.project-img-container {
			grid-column: 1/9;
		}

		.right.project-text-container {
			grid-column: 4/9;
		}

		.left.project-text-container {
			grid-column: 1/6;
		}

		.project-img-container {
			top: 0;
			margin-bottom: 0;
			z-index: 0;
			grid-row: 1;
		}

		.project-text-container {
			top: -32px;
			grid-row: 2;
			margin-bottom: -32px;
			z-index: 1;
			height: auto;
		}

		.project .ml-40,
		.project .ml-165 {
			margin-left: 40px;
		}

		.project-text-body p {
			width: revert;
			margin-right: 40px;
		}

		.project-text-tag {
			width: revert;
			position: revert;
			margin-right: 40px;
			margin-bottom: 32px;
			margin-top: 32px;
		}
	}
	@media screen and (max-width: 740px) {
		.column {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			column-gap: 16px;
		}

		.project-text-container,
		.project-img-container {
			grid-column: 1/5;
		}

		.project-img-container {
			top: 0;
			margin-bottom: 0;
			z-index: 0;
			grid-row: 1;
		}

		.project-text-container {
			height: auto;
			top: -16px;
			grid-row: 2;
			margin-bottom: -16px;
			z-index: 1;
		}

		.project-text-subheader {
			flex-direction: column;
		}

		.project-text-body h3 {
			margin-top: 8px;
		}

		.project .ml-40,
		.project .ml-165 {
			margin-left: 24px;
		}

		.project .mr-40 {
			margin-right: 24px;
		}

		.project-text-body p {
			width: revert;
			margin-right: 24px;
		}

		.project-text-tag {
			position: revert;
			width: revert;
			margin-top: 32px;
			margin-right: 24px;
			margin-bottom: 32px;
		}
	}
</style>
