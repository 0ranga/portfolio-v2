<script>
	let menuOpen = false;
</script>

<nav>
	<button on:click={() => (menuOpen = !menuOpen)} class:open={menuOpen} class="menu-btn">
		<span class="menu-btn-burger" />
	</button>
</nav>

<div class:hidden={!menuOpen} class="menu">
	<a on:click={() => (menuOpen = !menuOpen)} href="/">Work</a>
	<a on:click={() => (menuOpen = !menuOpen)} href="/playground">Playground</a>
	<a on:click={() => (menuOpen = !menuOpen)} href="/about-me">About me</a>
	<!-- <a on:click={() => (menuOpen = !menuOpen)} href="/">Contact</a> -->
</div>

<style>
	nav {
		height: 80px;
		position: fixed;
		width: 100%;
		z-index: 100;
	}

	button {
		border: none;
		padding: 0;
		margin: 0;
		background: transparent;
		cursor: pointer;
	}

	.menu-btn {
		position: relative;
		display: inline-block;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: auto;
	}

	.menu-btn-burger {
		width: 90px;
		height: 3px;
		background: black;
		transform: translateY(-50%);
		transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	.menu-btn-burger::before {
		content: '';
		position: absolute;
		display: block;
		width: 90px;
		height: 3px;
		background: black;
		transform: translate(0px, 7px);
		transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	.open .menu-btn-burger {
		transform: rotate(135deg);
		background: white;
	}

	.open .menu-btn-burger::before {
		transform: rotate(90deg);
		background: white;
	}

	.menu {
		display: flex;
		position: fixed;
		width: 100vw;
		height: 100vh;
		background-color: #000;
		opacity: 0.9;
		z-index: 2;
		color: white;
		flex-direction: column;
		/* padding: 104px 96px 80px; */
		padding-top: 0%;
		align-items: center;
		justify-content: center;
		gap: 24px;
		transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
		z-index: 90;

		font-family: roc-grotesk;
		font-size: 6em;
		font-style: normal;
		font-weight: 400;
		/* line-height: 49px; */
		letter-spacing: 0em;
		text-align: left;
		text-transform: uppercase;
		/* white-space: nowrap; */
	}

	.hidden {
		visibility: hidden;
		opacity: 0;
	}

	.menu a {
		display: block;
		color: white;
	}

	.menu a:hover {
		text-decoration: none;
	}

	@media screen and (max-width: 740px) {
		.menu {
			font-size: 11vw;
			gap: calc(100vh/15);
		}
	}
</style>
