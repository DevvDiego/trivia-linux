<script>
	import '../app.css';
    import { onMount } from 'svelte';
    import { getCurrentScore } from '$lib/stores/currentScore.svelte';
    import { base } from '$app/paths';
	
	let currentScore = $state(0);
	
	let { children } = $props();
</script>

<!-- navbar -->
<nav class="sticky top-0 left-0 z-10">
	
	<ul class="
		w-dvw h-14 py-3 rounded-b-xl
		flex flex-row items-center justify-around md:justify-around
		bg-base-300 text-white md:text-lg
	">
		<li class="flex flex-row items-center gap-3 text-xl">

			<a href={ base + "/"} class="btn">
				<div class="max-w-6 md:max-w-10">
					<img src="./icons/linuxtux.svg" alt="linux icon">
				</div>
				Dev Quizzes
			</a>

		</li>

		<li>
			<span>
				Score: {getCurrentScore()}
			</span>
		</li>
	</ul>

</nav>

{@render children()}
