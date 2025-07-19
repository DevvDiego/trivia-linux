<script>
    import Quizz from "$lib/components/Quizz.svelte";

    let trivias = $state(
        {
            bash:{
                title: "Basic Bash",
                body: "Comandos de Bash",
                icon: "bash-icon.svg",
                alt: "bash icon"
            },

            svelte:{
                title: "Svelte",
                body: "Sintaxis de Svelte 5",
                icon: "svelte-icon.svg",
                alt: "svelte icon"
            },

            postgresql:{
                title: "PostgreSQL",
                body: "La base de datos open-source",
                icon: "postgresql-icon.svg",
                alt: "postgre sql icon"
            },
            
            cplusplus:{
                title: "C++",
                body: "El lenguaje maestro",
                icon: "cplusplus-icon.svg",
                alt: "pocketbase icon"
            },
        }
    );


</script>

<header class="m-5 text-white">

    <span class="block text-center text-xl">
        ¿Que vamos a aprender hoy?
    </span>

</header>

<section class="
    mt-4
    flex flex-row flex-wrap gap-5 justify-center
">
    
    <Quizz {...trivias["bash"]} />
    <Quizz {...trivias["cplusplus"]} />
    <Quizz {...trivias["svelte"]} />
    <Quizz {...trivias["postgresql"]} />
</section>