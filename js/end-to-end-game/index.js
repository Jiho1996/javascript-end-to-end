import {$button, $input, $order, $warn} from "../data/elements.js"
import { ASK_MESSAGE } from "../data/consts.js"
import {isValidWord, nextStep} from "./isValidInput.js"
import {WORD, LIST} from "../data/consts.js"
import {RESULT_TEXT} from '../data/consts.js'
import { $ } from "../utils.js"
import {store} from "../store/store.js"

function App(){

    this.init = () => {
        store.getLocalStorage()
        make_incorrect_list();
        initEventListener();
    }
    console.log(LIST.incorrect_list)
    const participants =  ( function () {
        if (LIST.incorrect_list !== undefined){
            return;
        }
        return Number(prompt(ASK_MESSAGE.PARTICIPATION_PEOPLE));
    })();
    
    LIST.incorrect_list = new Array(participants);
    console.log(LIST.incorrect_list);

    const make_incorrect_list = () => {
        for (let i = 0; i < LIST.incorrect_list.length ; ++i) {
            LIST.incorrect_list[i] = 3;
    }
    return;
}

    const getTurnParticipant = (num, participants) => {
        if (num + 1 > participants){
            console.log(num + 1);
            $order.textContent = 1;
            return;
        }
        if (num + 1 <= participants){
            $order.textContent = num + 1;
            console.log($order.textContent);
            return;
        }  
    }

    const isEmpthy = (text) => {
        if (text === ""){
            alert(RESULT_TEXT.RESULT_EMPTY)
            return true;
        }
    }

    const submitAnswer =()=>{

        if (isEmpthy($("#input-text").value)){
            return;
        }
        
        const submittedAnswer = $("#input-text").value;
        console.log(WORD.PRESENT_WORD);
        if (WORD.PRESENT_WORD === null){ // 처음
            nextStep(submittedAnswer, LIST.incorrect_list);
            return ;
        }

        if (isValidWord(WORD.PRESENT_WORD, submittedAnswer)){
            noticeCorrectAnswer();
            nextStep(submittedAnswer, LIST.incorrect_list);
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
        LIST.incorrect_list[$order.textContent - 1] -= 1;
        console.log(LIST.incorrect_list);
        $warn.textContent = RESULT_TEXT.RESULT_FAIL + `남은기회 ${LIST.incorrect_list[$order.textContent - 1]}`
        if (LIST.incorrect_list[$order.textContent - 1] < 0){
            alert(`탈락자는 ${$order.textContent}번째 참가자`)
            location.reload();
        }
        return;

    }
    
    const noticeCorrectAnswer = () =>{
        $warn.textContent = RESULT_TEXT.RESULT_SUCCESS;
        getTurnParticipant(parseInt($order.textContent), parseInt(participants));
    }

    const initEventListener = () => {
        $input.addEventListener('keypress', onInput);
        $button.addEventListener('click', submitAnswer);
    }
    
};

const app = new App();
app.init();
