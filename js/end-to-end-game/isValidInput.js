import {$word, $input} from '../data/elements.js'
import {$} from '../utils.js'
import {WORD} from "../data/consts.js"

export const isValidWord = (presentWord, inputWord) => {
    console.log(presentWord);
    if (presentWord[presentWord.length - 1] !== inputWord[0]){
        console.log("false");
        return false;
    }
    if (presentWord[presentWord.length - 1] === inputWord[0]){
        console.log("true");
        return true;
    }
    
}



export const nextStep = (inputWord) => {
    WORD.PRESENT_WORD.push(inputWord);
    inputWord = ''
    $word.textContent = WORD.PRESENT_WORD[WORD.PRESENT_WORD.length - 1];
    $('input').value = ''
    $input.focus();
}
