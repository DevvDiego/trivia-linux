<script>
    let { class: className, id, technology,
         question, selected, score, reason, isCorrect} = $props();
</script>

<fieldset class="{className} 
    {(isCorrect) ? "border-success":"border-error"}
    fieldset bg-base-200 border-base-300 
    rounded-box w-xs border p-4 my-5"
>
  
    <legend class="fieldset-legend"> {technology} </legend>
  
    <h2 class="text-base font-base">
        {question}
    </h2>


    <select class="select" onchange={storeValue}>
        <option disabled selected>{selected}</option>
    </select>


    <p class="label"> {score} points </p>

    <div class="m-auto tooltip tooltip-top text-wrap" data-tip={reason}>
        <button class="btn">Explicacion</button>
    </div>


</fieldset>