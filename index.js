

(function (){
    let presentWord;
    let inputWord;
    let is_false = false
    const participants = Number(prompt('참가 인원은 몇명인가요?'));
    const $button = document.querySelector('button');
    const $input = document.querySelector('input');
    const $word = document.querySelector('#word');
    const $order = document.querySelector('#order');
    const $warn = document.querySelector('#warning');
    
    
    

    function countParticipants(num, participants){
        if (num + 1 > participants){
            $order.textContent = 1;
        }
        else if (num + 1 <= participants){
            $order.textContent = num + 1;
        }
        
    }

    function isValidWord(){
        
        if (typeof presentWord == "undefined"){
            presentWord = inputWord;
            console.log(presentWord)
            $word.textContent = presentWord;
            $warn.textContent = '';
            return ;
        }
        console.log(presentWord[presentWord.length - 1], inputWord[0])

        if (presentWord[presentWord.length - 1] !== inputWord[0]){
            $warn.textContent = '틀렸습니다.'
            is_false = true;
            return;
        }

        else if (presentWord[presentWord.length - 1] === inputWord[0]){
            $warn.textContent = '맞았습니다.'
            is_false = false;
            presentWord = inputWord;
            $word.textContent = presentWord;

        }

        else {
            $warn.textContent = '다른 참가자 입력 대기중..'
            presentWord = inputWord;
            $word.textContent = presentWord;
        }
        
    }
    

    const onClickButton =()=>{

        if (typeof inputWord == "undefined"){
            $warn.textContent = '입력하지 않았습니다.'
            return ;
        }
        
        isValidWord();
        if (!is_false){
            countParticipants(Number($order.textContent), participants);
        }
        }

    const onInput = (event) =>{
        inputWord = event.target.value;
    }

    $input.addEventListener('input', onInput)
    $button.addEventListener('click', onClickButton);
    
    
    

}



)();
