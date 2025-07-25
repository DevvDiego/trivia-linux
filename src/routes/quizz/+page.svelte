<script>
    import { getCurrentQuizz } from "$lib/stores/currentQuizz.svelte";
    import { onMount } from "svelte";

    let questions = $state(null);

    onMount(async ()=>{
        const response = await fetch( getCurrentQuizz() )
        const quizz = await response.json();

        console.log(quizz);
    });


</script>


<div></div>


<div class="absolute bottom-4 w-full text-center">
    <ul class="steps">
        <li class="step step"></li>
        <li class="step step"></li>
        <li class="step step"></li>
        <li class="step step"></li>
    </ul>
</div>