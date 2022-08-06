import {$order, $warn, $word} from '../data/elements.js'
import {$} from '../utils.js'
import {RESULT_TEXT} from '../data/consts.js'
import {WORD} from "../data/consts.js"

export function isValidWord(presentWord, inputWord){
    

    if (presentWord == ""){ // 처음
        nextStep(presentWord, inputWord)
        return ;
    }

    if (inputWord == ''){
        $warn.textContent = RESULT_TEXT.RESULT_EMPTY;
        return ;
    }

    if (presentWord[presentWord.length - 1] !== inputWord[0]){
        
        
        incorrect_count[$order.textContent] -= 1;
        $warn.textContent = RESULT_TEXT.RESULT_FAIL + `남은기회 ${incorrect_count[$order.textContent]}`
        if (incorrect_count[$order.textContent] < 0){
            alert(`탈락자는 ${$order.textContent}번째 참가자`)
            location.reload();
        }
        return false;
    }
    if (presentWord[presentWord.length - 1] === inputWord[0]){
        $warn.textContent = RESULT_TEXT.RESULT_SUCCESS;
        
        nextStep()
        return true;
    }
    
}



function nextStep(presentWord, inputWord) {
    
    WORD.PRESENT_WORD = inputWord;
    inputWord = ''
    $word.textContent = presentWord;
    $('input').value = ''
    $input.focus();
}