import {$order, $warn, $word} from '../data/elements.js'
import {$} from '../utils.js'
import {RESULT_TEXT} from '../data/consts.js'
import {WORD} from "../data/consts.js"

export const isValidWord = (presentWord, inputWord) => {

    if (presentWord[presentWord.length - 1] !== inputWord[0]){
        return false;
    }
    if (presentWord[presentWord.length - 1] === inputWord[0]){
        return true;
    }
    
}



export const nextStep = (presentWord, inputWord) => {
    WORD.PRESENT_WORD = inputWord;
    inputWord = ''
    $word.textContent = presentWord;
    $('input').value = ''
    $input.focus();
}
