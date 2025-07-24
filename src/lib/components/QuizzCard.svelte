<script>
    import { base } from "$app/paths";
    import { changeCurrentQuizz, currentQuizz } from "$lib/stores/currentQuizz.svelte";


    let {title, body, icon, alt, questions, ...props} = $props();
</script>


<div class="card bg-base-100 w-64 pt-4 shadow-xs shadow-white ">
    <figure class="w-full m-auto">
        <img
            class="w-5/12 h-[100px]"
            src={icon}
            alt={alt}
        />
    </figure>

    <div class="card-body">

        <h2 class="card-title">{title}</h2>
    
        <p>{body}</p>
    
        <div class="card-actions justify-end">
            <a 
                href={ base+"/quizz" } 
                onclick={ ()=>{changeCurrentQuizz(questions)} }
                class="btn btn-primary">
                Iniciar
            </a>
        </div>

    </div>
</div>