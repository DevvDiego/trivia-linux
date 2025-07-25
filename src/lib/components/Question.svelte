<script>


    let { class: className, id, technology, difficulty,
         question, options, answer, score } = $props();
</script>

<fieldset class="{className} my-5
    fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
>
  
    <legend class="fieldset-legend"> {technology} </legend>
  
    <h2 class="text-base font-base">
        {question}
    </h2>


    <select class="select">
        <option disabled selected>Selecciona una opcion</option>
        {#each options as option}
            <option>
                {option}
            </option>
        {/each}
    </select>


    <p class="label"> {score} points </p>

    {#if difficulty == "easy"}
        <div class="badge badge-success">Easy</div>
    {:else if difficulty == "medium"}
        <div class="badge badge-warning">Medium</div>
    {:else if difficulty == "hard"}
        <div class="badge badge-error">Hard</div>
    {:else}
        <!-- Show no badges -->
    {/if}

    <button class="btn btn-primary mt-4">
        Send
    </button>

</fieldset>