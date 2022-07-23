

(function (){
    let presentWord;
    let inputWord;
    const participants = Number(prompt('참가 인원은 몇명인가요?'));
    const $button = document.querySelector('button');
    const $input = document.querySelector('input');
    const $word = document.querySelector('#word');
    const $order = document.querySelector('#order');
    const $warn = document.querySelector('#warning');
 

  
    const onInput = (event) =>{
        inputWord = event.target.value;
    }

    $input.addEventListener('input', onInput)
  
    
    
    

}



)();
