<script>
    import Question from "$lib/components/Question.svelte";
    import { getCurrentQuizz } from "$lib/stores/currentQuizz.svelte";
    import { onMount } from "svelte";

    let questions = $state(null);

    onMount(async ()=>{
        const response = await fetch( getCurrentQuizz() )
        const quizz = await response.json();

        questions = quizz;

    });


</script>


{#each questions as question}
    
    <Question class="m-auto" {...question} />

{/each}


<div class="bg-base-100 fixed bottom-0 w-full text-center">
    <ul class="steps">
        <li class="step step"></li>
        <li class="step step"></li>
        <li class="step step"></li>
        <li class="step step"></li>
    </ul>
</div>