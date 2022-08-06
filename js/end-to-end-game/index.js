import {$button, $input, $order, $warn, $word} from "../data/elements.js"
import { ASK_MESSAGE } from "../data/consts.js"
import {isValidWord} from "./isValidInput.js"
import {WORD} from "../data/consts.js"

function App(){

    this.init = () => {
    
    }

    this.presentWord = "";
    this.inputWord = "";
    this.is_true = true;

    const participants = Number(prompt(ASK_MESSAGE.PARTICIPATION_PEOPLE));
    this.incorrect = new Array(participants)

    const make_incorrect_list = () => {
        for (let i = 0; i < incorrect.length ; ++i) {
            this.incorrect[i] = 3;
    }
        return;
}

    function getTurnParticipant(num, participants){
        if (num + 1 > participants){
            $order.textContent = 1;
            return;
        }
        if (num + 1 <= participants){
            $order.textContent = num + 1;
            return;
        }
        
    }

    const onClickButton =()=>{

        is_true = isValidWord(WORD.PRESENT_WORD, WORD.INPUT_WORD);
        
        if (is_true){
            noticeCorrectAnswer();
            return;
            }
        if (!is_true){
            noticeWrongAnswer();
            return;
        }


    }

    const onInput = (event) =>{
        if (event.key !== "Enter"){
            return;
        }
        WORD.INPUT_WORD = event.value;
        
    }


    const noticeWrongAnswer = () =>{

    }
    
    const noticeCorrectAnswer = () =>{
    
    }

    
    $input.addEventListener('keypress', onInput);
    $button.addEventListener('click', onClickButton);
    
};

const app = new App();
app();
