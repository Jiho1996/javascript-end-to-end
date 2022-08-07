import {WORD} from "../data/consts.js"

export const store = {
    setLocalStorage(word, incorrectList){
        localStorage.setItem("word", JSON.stringify(word));
        localStorage.setItem("incorrectList", JSON.stringify(incorrectList));
    },
    getLocalStorage(){
        WORD.PRESENT_WORD = JSON.parse(localStorage.getItem("word"));
        let ii = JSON.parse(localStorage.getItem("incorrectList"));
        
    },
};