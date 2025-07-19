<script>
	import '../app.css';
	
	// move to a store.svelte.js
	let currentScore = $state(0);

	let { children } = $props();
</script>

<!-- navbar -->
<nav>
	
	<ul class="
		w-dvw p-2 px-5 rounded-b-xl
		flex flex-row items-center justify-between md:justify-around
		bg-neutral-800 text-white md:text-lg
	">
		<li class="flex flex-row items-center gap-3 text-xl">
			<div class="max-w-6 md:max-w-10">
				<img src="linuxtux.svg" alt="linux icon">
			</div>
			Linux Trivia
		</li>

		<li>
			<span>
				{currentScore} exp
			</span>
		</li>
	</ul>

</nav>

{@render children()}
