import {WORD, LIST} from "../data/consts.js"

export const store = {
    setLocalStorage(word, incorrectList){
        localStorage.setItem("word", JSON.stringify(word));
        localStorage.setItem("incorrectList", JSON.stringify(incorrectList));
    },
    getLocalStorage(){
        WORD.PRESENT_WORD = JSON.parse(localStorage.getItem("word"));
        LIST.INCORRECT_LIST = JSON.parse(localStorage.getItem("incorrectList"));
        console.log(LIST.INCORRECT_LIST)
    },
};