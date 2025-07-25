<script>
    import { base } from "$app/paths";
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


<div class="flex flex-col justify-center items-center">

    {#each questions as question}
        
        <Question class="m-auto" {...question} />

    {/each}

    <a href={base + "/results"} class="
        btn btn-primary btn-block btn-lg 
        max-w-5/12 my-10
    ">
        Enviar
    </a>

</div>