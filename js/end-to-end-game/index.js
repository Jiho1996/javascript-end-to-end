import {$button, $input, $order, $warn} from "../data/elements.js"
import { ASK_MESSAGE } from "../data/consts.js"
import {isValidWord, nextStep} from "./isValidInput.js"
import {WORD, LIST} from "../data/consts.js"
import {RESULT_TEXT} from '../data/consts.js'
import { $ } from "../utils.js"
import {store} from "../store/store.js"

function App(){

    store.getLocalStorage()

    this.init = () => {
        make_incorrect_list();
        initEventListener();
    }
    console.log(LIST.INCORRECT_LIST);
    const participants =  ( function () {
        if (LIST.INCORRECT_LIST !== null){
            return;
        }
        return Number(prompt(ASK_MESSAGE.PARTICIPATION_PEOPLE));
    })();
    
    LIST.INCORRECT_LIST = new Array(participants);

    const make_incorrect_list = () => {
        for (let i = 0; i < LIST.INCORRECT_LIST.length ; ++i) {
            LIST.INCORRECT_LIST[i] = 3;
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
            nextStep(submittedAnswer, LIST.INCORRECT_LIST);
            return ;
        }

        if (isValidWord(WORD.PRESENT_WORD, submittedAnswer)){
            noticeCorrectAnswer();
            nextStep(submittedAnswer, LIST.INCORRECT_LIST);
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
        LIST.INCORRECT_LIST[$order.textContent - 1] -= 1;
        $warn.textContent = RESULT_TEXT.RESULT_FAIL + `남은기회 ${LIST.INCORRECT_LIST[$order.textContent - 1]}`
        console.log(WORD.PRESENT_WORD, LIST.INCORRECT_LIST);
        store.setLocalStorage(WORD.PRESENT_WORD, LIST.INCORRECT_LIST);
        console.log(LIST.INCORRECT_LIST, LIST.INCORRECT_LIST)
        if (LIST.INCORRECT_LIST[$order.textContent - 1] < 0){
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
