//use this store to not depend or url or slug pages
export let currentAnswers = $state(
    {json:""}
);

export const addAnswer = (id, technology, difficulty,
         question, selected, score, reason, isCorrect) => {
    //que deberia hacer??
    let savedAnswers = JSON.parse( localStorage.getItem("savedAnswers") );
    if( savedAnswers === null) savedAnswers = [];

    

    let answers = [
        ...savedAnswers,
        {
            id,
            question,
            selected,
            score,
            reason,
            isCorrect
        }
    ]
    

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
