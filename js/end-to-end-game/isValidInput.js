import {$word, $input} from '../data/elements.js'
import {$} from '../utils.js'
import {WORD} from "../data/consts.js"
import { store } from '../store/store.js';

export const isValidWord = (presentWord, inputWord) => {

    if (presentWord[presentWord.length - 1] !== inputWord[0]){
        console.log("false");
        return false;
    }
    if (presentWord[presentWord.length - 1] === inputWord[0]){
        console.log("true");
        return true;
    }
    
}



export const nextStep = (inputWord, incorrect_list) => {
    WORD.PRESENT_WORD = inputWord;
    store.setLocalStorage(WORD.PRESENT_WORD, incorrect_list);
    inputWord = ''
    $word.textContent = WORD.PRESENT_WORD;
    $('input').value = ''
    $input.focus();
}
