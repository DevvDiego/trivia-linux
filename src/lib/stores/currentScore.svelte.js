import { browser } from '$app/environment';

const state = $state({
    value: 0
});

if (browser) {
    state.value = Number(localStorage.getItem("storedScore")) || 0;
}

export const currentScore = {
    get value() { return state.value; }
};

export const addScore = (quantity) => {
    if (!browser) return;
    
    state.value += Number(quantity);
    localStorage.setItem("storedScore", state.value.toString());
};

export const getCurrentScore = () => {
    return state.value; 
};
