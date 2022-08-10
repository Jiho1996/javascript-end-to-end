import { $button, $input, $order, $warn } from "../data/elements.js"
import { ASK_MESSAGE } from "../data/consts.js"
import { isValidWord, nextStep } from "./isValidInput.js"
import { WORD, LIST } from "../data/consts.js"
import { RESULT_TEXT } from '../data/consts.js'
import { $ } from "../utils.js"
import { store } from "../store/store.js"

function App(){

    // 상수를 하나 분리 해서 값을 계속 바꿔치기 하는 방법이 옳은건가..?
    // 함수 분리 좀 더 필요
    // 함수 구조화 조금 더 필요.

    this.init = () => {
        store.setLocalArrayStorage(make_init_incorrect_list());
        initEventListener();
    }

    const participants =  ( function () {
        if (store.getLocalArrayStorage() !== null){
            return;
        }
        return Number(prompt(ASK_MESSAGE.PARTICIPATION_PEOPLE));
    })();
    
    const make_init_incorrect_list = () => {
        let incorrect_list = new Array(participants)
        for (let i = 0; i < incorrect_list.length ; ++i) {
            incorrect_list[i] = 3;
    }
    return incorrect_list;
}

    const incorrectHandleling = function (){
        let _incorrect_list = new Array(participants)
        for (let i = 0; i < _incorrect_list.length ; ++i) {
            _incorrect_list[i] = 3;
    }
        return function (num){
            if (num === undefined){
                return _incorrect_list;
            }
            if (_incorrect_list[num] === 0){
                return false;
            }
            _incorrect_list[num] -= 1;
            return _incorrect_list;
        }
    }

    let getIncorrectList = incorrectHandleling();

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
        console.log(WORD.PRESENT_WORD, submittedAnswer)
        if (WORD.PRESENT_WORD === ""){// 처음
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
        store.getLocalArrayStorage();
        
        if(!(getIncorrectList($order.textContent - 1))){
            alert(`탈락자는 ${$order.textContent}번째 참가자`)
            location.reload();
        }
        $warn.textContent = RESULT_TEXT.RESULT_FAIL + `남은기회 ${getIncorrectList()[$order.textContent - 1]}`
        console.log(getIncorrectList());
        store.setLocalArrayStorage(getIncorrectList());
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
