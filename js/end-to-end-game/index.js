import {$button, $input, $order, $warn, $word} from "../data/elements.js"
import { ASK_MESSAGE } from "../data/consts.js"
import {isValidWord} from "./isValidInput.js"
import {WORD} from "../data/consts.js"

(function (){
    let presentWord;
    let inputWord;
    let is_false = false
    const participants = Number(prompt(ASK_MESSAGE.PARTICIPATION_PEOPLE));
    


    function make_incorrect_list(){
        const incorrect = new Array(participants)
        for (let i = 0; i < incorrect.length ; ++i) {
            incorrect[i] = 3;
    }
        return incorrect
}

    function countParticipants(num, participants){
        if (num + 1 > participants){
            $order.textContent = 1;
            return;
        }
        if (num + 1 <= participants){
            $order.textContent = num + 1;
            return;
        }
        
    }

    // function isValidWord(){
    //     if (typeof presentWord == "undefined"){
    //         presentWord = inputWord;
    //         nextStep()
    //         return ;
    //     }
    //     if (presentWord[presentWord.length - 1] !== inputWord[0]){
            
    //         is_false = true;
    //         incorrect_count[$order.textContent] -= 1;
    //         $warn.textContent = `틀렸습니다. 남은기회 ${incorrect_count[$order.textContent]}`
    //         if (incorrect_count[$order.textContent] < 0){
    //             alert(`탈락자는 ${$order.textContent}번째 참가자`)
    //             location.reload();
    //         }
    //         return;
    //     }
    //     else if (presentWord[presentWord.length - 1] === inputWord[0]){
    //         $warn.textContent = '맞았습니다.'
    //         is_false = false;
    //         nextStep()
    //     }
    // }
    

    const onClickButton =()=>{

        
        //console.log(presentWord, inputWord);

        is_false = isValidWord(WORD.PRESENT_WORD, WORD.INPUT_WORD);
        
        if (!is_false){
            countParticipants(Number($order.textContent), participants);
        }
        }

    const onInput = (event) =>{
        WORD.INPUT_WORD = event.target.value;
        
    }

    
    $input.focus();
    const incorrect_count = make_incorrect_list();
    $input.addEventListener('input', onInput);
    $button.addEventListener('click', onClickButton);
    
    
    

}



)();
