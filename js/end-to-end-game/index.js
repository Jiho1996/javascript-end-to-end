import { $button, $input, $order, $warn } from "../data/elements.js"
import { ASK_MESSAGE } from "../data/consts.js"
import { isValidWord, nextStep } from "./isValidInput.js"
import { WORD } from "../data/consts.js"
import { RESULT_TEXT } from '../data/consts.js'
import { $ } from "../utils.js"
import { store } from "../store/store.js"

function App(){

    // 상수를 하나 분리 해서 값을 계속 바꿔치기 하는 방법이 옳은건가..?
    // 함수 분리 좀 더 필요
    // 함수 구조화 조금 더 필요.

    this.init = () => {
        initEventListener();
    }

    const participants =  ( function () {
        if (store.getLocalArrayStorage() !== null){
            return;
        }
        return Number(prompt(ASK_MESSAGE.PARTICIPATION_PEOPLE));
    })();

    const getParticipantsArray = (arr) =>{
        for (let i = 0; i < arr.length ; ++i) {
            arr[i] = 3;
    }
        return arr
    }

    const incorrectHandleling = function (){
        let _incorrectList = new Array(participants)
        _incorrectList = getParticipantsArray(_incorrectList);

        return function (num){
            if (num === undefined){
                return _incorrectList;
            }
            if (_incorrectList[num] === 0){
                return false;
            }
            _incorrectList[num] -= 1;
            return _incorrectList;
        }
    }

    let getIncorrectList = incorrectHandleling();

    // let getPresentWord  = presentWordHandling();

    // const presentWordHandling = () => 
    // {   
    //     const presentWordArray = new Array();
    //     return (word) => {
    //         presentWordArray.push(word);
    //     }
    // }

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

    const isFirstTry = (text) => {
        if (text.length === 0){
            return true;
        }
        return false;
    }

    const isDuplicated = (text) => {
        if (WORD.PRESENT_WORD.includes(text)) return true
        return false
    }

    const submitAnswer =()=>{
        const submittedAnswer = $("#input-text").value;

        if (isEmpthy(submittedAnswer)){
            return;
        }

        if (isFirstTry(WORD.PRESENT_WORD)){// 처음
            nextStep(submittedAnswer);
            return ;
        }
        noticeResult(WORD.PRESENT_WORD[WORD.PRESENT_WORD.length - 1], submittedAnswer);
        return;
    }

    const onInput = (event) =>{
        if (event.key !== "Enter"){
            return;
        }
        submitAnswer(); 
    }

    const noticeResult = (presentWord, inputWord) =>{
        if (isDuplicated(inputWord)){
            noticeWrongAnswer(1);
            return;
        }

        if (isValidWord(presentWord, inputWord)){
            noticeCorrectAnswer();
            nextStep(inputWord);
            return ;
        }

        if (!(isValidWord(presentWord, inputWord))){
            noticeWrongAnswer(0);
            return ;
        }
    }

    const noticeWrongAnswer = (num) =>{
        store.getLocalArrayStorage();
        
        if(!(getIncorrectList($order.textContent - 1))){
            window.localStorage.clear();
            alert(`탈락자는 ${$order.textContent}번째 참가자`)
            location.reload();
            return;
            // location.reload해도 return 꼭 적기.
        }
        if (num === 0)$warn.textContent = RESULT_TEXT.RESULT_FAIL + `남은기회 ${getIncorrectList()[$order.textContent - 1]}`
        if (num === 1)$warn.textContent = RESULT_TEXT.RESULT_DUPLICATED + `남은기회 ${getIncorrectList()[$order.textContent - 1]}`
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
