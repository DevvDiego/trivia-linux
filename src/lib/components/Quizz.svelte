<script>


    let {title, body, icon, alt, ...props} = $props();
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
            <button class="btn btn-primary">Ver</button>
        </div>

    </div>
</div>