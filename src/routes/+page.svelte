<script>
    import Quizz from "$lib/components/QuizzCard.svelte";
    import { onMount } from "svelte";

    onMount(async()=>{
        const res = await fetch("./quizzes.json")
        if(!res.ok) return;

        quizzes = await res.json();

        isLoading = false;
    });

    let quizzes = $state(); 

    let isLoading = $state(false);

</script>

{#if isLoading == true}
    <span class="
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        loading w-12 loading-spinner text-accent"
    ></span>
{:else}

    <header class="m-5 text-white">

        <span class="block text-center text-xl">
            ¿Que vamos a aprender hoy?
        </span>

    </header>

    <section class="
        m-5
        flex flex-row flex-wrap gap-5 justify-center
    ">
        
        <Quizz {...quizzes["bash"]}/>
        <Quizz {...quizzes["cplusplus"]} />
        <Quizz {...quizzes["svelte"]} />
        <Quizz {...quizzes["postgresql"]} />

    </section>

{/if}