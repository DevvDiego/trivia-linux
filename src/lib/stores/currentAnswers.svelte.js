//use this store to not depend or url or slug pages
export let currentAnswers = $state(
    {json:""}
);

export const addAnswer = (questionId, value, isCorrect, score) => {
    //que deberia hacer??
    let savedAnswers = JSON.parse( localStorage.getItem("savedAnswers") );
    // if( savedAnswers === null) throw new Error("no previous answers");

    

    let answers = {
        ...savedAnswers,
        [questionId]:{
            value,
            isCorrect,
            score
        }
    }
    

    localStorage.setItem("savedAnswers", JSON.stringify(answers));
    currentAnswers.json = answers;
}

export const resetAnswers = () => {
    localStorage.removeItem("savedAnswers");
    currentAnswers.json = "";
    return;
}

export const getAnswers = () => {
    let savedAnswers = JSON.parse( localStorage.getItem("savedAnswers") );
    currentAnswers.json = savedAnswers;

    return currentAnswers.json;
}
