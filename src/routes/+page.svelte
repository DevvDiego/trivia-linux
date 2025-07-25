<script>
    import QuizzCard from "$lib/components/QuizzCard.svelte";
    import { resetAnswers } from "$lib/stores/currentAnswers.svelte";
    import { onMount } from "svelte";

    onMount(async()=>{

        //if this page is mounted, remove the stored answers if they exist
        resetAnswers();

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
    
        {#if !quizzes}
            
            <h1>Cargando...</h1>

        {:else}
            
            {#each quizzes as quizz }
                <QuizzCard {...quizz} />
            {/each}

        {/if}

    </section>

{/if}