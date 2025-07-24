//use this store to not depend or url or slug pages
export let currentQuizz = $state({value:""});
export const changeCurrentQuizz = (quizz)=>{
    localStorage.setItem("currentQuizz", quizz);
    currentQuizz.value = quizz;
}

export const getCurrentQuizz = () => {
    //que deberia hacer??
    let previousQuizz = localStorage.getItem("storedQuizz");
    
    if( previousQuizz === null) throw new Error("no previous quizz");

    //restore the previous quizz
    currentQuizz.value = previousQuizz;
    return currentQuizz.value;
}

