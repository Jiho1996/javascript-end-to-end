
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
    
    

    function nextStep() {
        presentWord = inputWord;
        inputWord = ''
        $word.textContent = presentWord;
        document.querySelector('input').value = ''
    }


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
        }
        else if (num + 1 <= participants){
            $order.textContent = num + 1;
        }
        
    }

    function isValidWord(){
        
        
        
        if (typeof presentWord == "undefined"){
            presentWord = inputWord;
            nextStep()
            return ;
        }
        //console.log(presentWord[presentWord.length - 1], inputWord[0]);
        if (presentWord[presentWord.length - 1] !== inputWord[0]){
            
            is_false = true;
            incorrect_count[$order.textContent] -= 1;
            $warn.textContent = `틀렸습니다. 남은기회 ${incorrect_count[$order.textContent]}`
            if (incorrect_count[$order.textContent] < 0){
                alert(`탈락자는 ${$order.textContent}번째 참가자`)
                location.reload();
            }

            return;
        }

        else if (presentWord[presentWord.length - 1] === inputWord[0]){
            $warn.textContent = '맞았습니다.'
            is_false = false;
            nextStep()

        }
        
    }
    

    const onClickButton =()=>{

        
        console.log(inputWord, presentWord);
        if (typeof inputWord == "undefined" || inputWord == ''){
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

    
    $input.focus();
    incorrect_count = make_incorrect_list();
    $input.addEventListener('input', onInput);
    $button.addEventListener('click', onClickButton);
    
    
    

}



)();
