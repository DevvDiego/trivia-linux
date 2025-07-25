<script>
    import { base } from "$app/paths";
    import Answer from "$lib/components/Answer.svelte";
    import { addScore, getCurrentScore } from "$lib/stores/currentScore.svelte";
    import { getAnswers } from "$lib/stores/currentAnswers.svelte";
    import { onMount } from "svelte";


    let answers = $state(null);
    let score = $state(null);
    let isLoading = $state(false);


    onMount(async()=>{
        
        answers = getAnswers();

        if(answers == null) location = base + "./";

        for (let i = 0; i < answers.length; i++) {
            if (answers[i].isCorrect) {
                score += answers[i].score;
            }
        }

        addScore(score);


        isLoading = false;
    });



</script>

{#if isLoading == true}
    <span class="
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        loading w-12 loading-spinner text-accent"
    ></span>
{:else}
    

<div class="card bg-base-200 text-primary-content w-96 m-auto my-4">
    <div class="card-body">
        <h2 class="card-title">
            Puntaje final
        </h2>
        
        <p class="text-xl font-bold">
            {score}
        </p>

        <div class="card-actions justify-end">
            <a href={base + "/"} class="btn btn-primary">Nuevo quizz</a>
        </div>
    </div>
</div>

<div class="flex flex-col justify-center items-center">

    <h2 class="mt-5">A continuacion tus respuestas:</h2>

    {#each answers as answer}
        
        <Answer class="m-auto" {...answer} />

    {/each}

</div>


{/if}