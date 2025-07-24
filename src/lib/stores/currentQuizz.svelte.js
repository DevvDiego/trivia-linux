//use this store to not depend or url or slug pages
export let currentQuizz = $state({value:""});
export const changeCurrentQuizz = (quizz)=>{
    localStorage.setItem("storedQuizz", quizz);
    currentQuizz.value = quizz;
}

export const getCurrentQuizz = () => {
    //que deberia hacer??
    const storedQuizz = localStorage.getItem("storedQuizz");
    
    if( storedQuizz === null) throw new Error("no previous quizz");

    //restore the previous quizz
    currentQuizz.value = storedQuizz;
    return currentQuizz.value;
}

