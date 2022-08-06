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

    this.presentWord = "";

    const participants = Number(prompt(ASK_MESSAGE.PARTICIPATION_PEOPLE));
    this.incorrect = new Array()

    const make_incorrect_list = () => {
        for (let i = 0; i < this.incorrect.length ; ++i) {
            this.incorrect[i] = 3;
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

        if (this.presentWord == ""){ // 처음
            nextStep(this.presentWord, submittedAnswer)
            return ;
        }

        if (isValidWord(submittedAnswer)){
            noticeCorrectAnswer();
            return;
        }
        if (!isValidWord(submittedAnswer)){
            noticeWrongAnswer();
            return;
        }
    }

    const onInput = (event) =>{
        if (event.key !== "Enter"){
            return;
        }
        submitAnswer(); 
    }


    const noticeWrongAnswer = () =>{
        this.incorrect[$order.textContent] -= 1;
        $warn.textContent = RESULT_TEXT.RESULT_FAIL + `남은기회 ${this.incorrect[$order.textContent]}`
        if (this.incorrect[$order.textContent] < 0){
            alert(`탈락자는 ${$order.textContent}번째 참가자`)
            location.reload();
        }
        return;

    }
    
    const noticeCorrectAnswer = () =>{
        $warn.textContent = RESULT_TEXT.RESULT_SUCCESS;
        getTurnParticipant(this.incorrect[$order.textContent], $order.textContent);
        nextStep();
    }

    const initEventListener = () => {
        $input.addEventListener('keypress', onInput);
        $button.addEventListener('click', submitAnswer);
    }
    
};

const app = new App();
app.init();
