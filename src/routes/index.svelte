<script>
	import Projects from '$lib/Projects.svelte';
</script>

<svelte:head>
	<title>Jordan Louis - Developer & Designer</title>
</svelte:head>

<h1>Jordan Louis</h1>
<div class="max-width mt-16 mb-48">
	<p>
		Hello! I am a developer and designer. I am currently pursuing a Master's Degree in Design
		Research at <a href="https://www.ip-paris.fr/en">Institut Polytechnique de Paris</a> and
		<a href="https://ens-paris-saclay.fr/en">École Normale Supérieure de Paris-Saclay</a>.
	</p>
	<p class="mt-16">
		Within my Master's I learn to tackle research from different perspectives: with an explorative
		and practical approach, but also with a scientific approach by following the methods of
		academia. Having a scientific background, this truly resonates with me which is why I apply a
		structured method in all my work.
	</p>
	<p class="mt-16">
		I strongly believe that innovation comes at the intersection of different fields, for this
		reason I advocate interdisciplinarity and I keep pushing myself into new environments. Being
		myself a lifelong learner, it is my conviction that there are no limits to learning. I feel an
		endless need to learn, improve and evolve.
	</p>
	<p class="mt-16">
		Here are a few subjects I am particularly interested in: Human Computer Interaction, Artificial
		Intelligence and Data Visualization.
	</p>

	<p class="mt-16">
		If you would like to collaborate with me or discuss, please don't hesitate to <a
			href="#"
			data-contact="aGVsbG8uam9yZGFubG91aXNAZ21haWwuY29t"
			onclick="this.href = 'mailto:' + atob(this.dataset.contact)"
		>
			contact me</a
		>.
	</p>
</div>

<Projects category={'work'} />

<style>
	/* .max-width {
		max-width: 704px;
	} */
</style>
