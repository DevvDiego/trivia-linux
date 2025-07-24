//use this store to not depend or url or slug pages
export let currentQuizz = $state({value:""});
export const changeCurrentQuizz = (quizz)=>{
    currentQuizz.value = quizz;
}

