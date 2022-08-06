import {$button, $input, $order, $warn, $word} from "../data/elements.js"
import { ASK_MESSAGE } from "../data/consts.js"
import {isValidWord, nextStep} from "./isValidInput.js"
import {WORD} from "../data/consts.js"
import {RESULT_TEXT} from '../data/consts.js'
import { $ } from "../utils.js"

function App(){

    this.init = () => {
        make_incorrect_list();
        initEventListener();
    }

    const participants = Number(prompt(ASK_MESSAGE.PARTICIPATION_PEOPLE));
    const incorrect = new Array(participants);

    const make_incorrect_list = () => {

        for (let i = 0; i < incorrect.length ; ++i) {
            incorrect[i] = 3;
    }
    return;
}

    const getTurnParticipant = (num, participants) => {
        if (num + 1 > participants){
            $order.textContent = 1;
            return;
        }
        if (num + 1 <= participants){
            $order.textContent = num + 1;
            return;
        }  
    }

    const isEmpthy = (text) => {
        if (text === ""){
            alert(RESULT_TEXT.RESULT_EMPTY)
            return;
        }
    }

    const submitAnswer =()=>{

        isEmpthy($("#input-text"))

        const submittedAnswer = $("#input-text").value;

        if (WORD.PRESENT_WORD === ""){ // 처음
            nextStep(this.presentWord, submittedAnswer)
            return ;
        }

        if (isValidWord(WORD.PRESENT_WORD, submittedAnswer)){
            noticeCorrectAnswer();
            return;
        }
        noticeWrongAnswer();
        
    }

    const onInput = (event) =>{
        if (event.key !== "Enter"){
            return;
        }
        submitAnswer(); 
    }


    const noticeWrongAnswer = () =>{
        incorrect[$order.textContent] -= 1;
        $warn.textContent = RESULT_TEXT.RESULT_FAIL + `남은기회 ${incorrect[$order.textContent]}`
        if (incorrect[$order.textContent] < 0){
            alert(`탈락자는 ${$order.textContent}번째 참가자`)
            location.reload();
        }
        return;

    }
    
    const noticeCorrectAnswer = () =>{
        $warn.textContent = RESULT_TEXT.RESULT_SUCCESS;
        getTurnParticipant(incorrect[$order.textContent], $order.textContent);
        nextStep();
    }

    const initEventListener = () => {
        $input.addEventListener('keypress', onInput);
        $button.addEventListener('click', submitAnswer);
    }
    
};

const app = new App();
app.init();
